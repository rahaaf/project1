import { Component, OnDestroy, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { FuseUtils } from '../@fuse/utils';
import { FaqService } from './services/faq.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements
 OnInit,
 OnDestroy
{ 
  faqs:any;
  faqsFiltered: any;
  step: number;
  searchInput: any;
  
  private _unsubscribeAll: Subject <any>;
  onFaqsChanged: any;

  constructor(private _Faqservice : FaqService)
  {
     this.searchInput = new FormControl('');
     this.step = 0;
     this._unsubscribeAll = new Subject();

  }
 

  ngOnInit(): void {
    this._Faqservice.onFaqsChanged
     .pipe(takeUntil(this._unsubscribeAll))
     .subscribe(response => {
         this.faqs = response;
         this.faqsFiltered = response;
     });
      this.searchInput.valueChanges
      .pipe(takeUntil(this._unsubscribeAll),
         debounceTime(300),
         distinctUntilChanged()
         )
      .subscribe(searchText => {
        this.faqsFiltered = FuseUtils.filterArrayByString(this.faqs,searchText);
       
        }); 
      
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
 

  setStep(index: number) :void {
     this.step = index;
  }

 nsxtStep() :void{
   this.step++;
 }

 prevStep() :void{
   this.step--;
 }

}

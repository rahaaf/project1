import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from './services/fake-db.service';
import { FaqService } from './services/faq.service';
import { DashboardsService } from './services/dashboards.service'
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,ToolbarComponent,FooterComponent, HomeComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay             : 0,
      passThruUnknownUrl: true
  }),
  ],
  providers: [FaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }

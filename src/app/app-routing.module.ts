import { NgModule } from "@angular/core";
 import {RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export  const routes: Routes = [
    { path:'',redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent}
   
    // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
    // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  ];


@NgModule({
   imports:[RouterModule.forRoot(routes)],
    exports :[RouterModule] 
    
})



  export class AppRoutingModule {}
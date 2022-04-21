import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';


const routes: Routes =[
  {path: '/login', component: AppComponent, pathMatch: "full"},


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]

})


export class AppRoutingModule { }

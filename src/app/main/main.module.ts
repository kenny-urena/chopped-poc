import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { SharedModule } from '../background-components/shared-module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LandingPageModule,
    SharedModule
  ],
  exports:[
    MainComponent
  ]
})
export class MainModule { }

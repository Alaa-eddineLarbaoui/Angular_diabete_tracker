import { BrowserModule,provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GlycemieComponent } from "./glycemie/glycemie.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GlycemieService} from "./glycemie.service";

@NgModule({
  declarations: [
    GlycemieComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    GlycemieComponent
  ],
  providers: [
    GlycemieService,
    provideClientHydration()
  ]
})

export class AppModule { }

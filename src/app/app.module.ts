import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { Phase2Component } from './phase2/phase2.component';
import { Phase3Component } from './phase3/phase3.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    Phase2Component,
    Phase3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:  []  ,
  bootstrap: [AppComponent]
})
export class AppModule { }

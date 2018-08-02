import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { jqxKnobComponent } from '../../node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxknob';
import { CompComponent } from './comp/comp.component';
@NgModule({
  declarations: [
    AppComponent,
    jqxKnobComponent,
    CompComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]})

export class AppModule { }

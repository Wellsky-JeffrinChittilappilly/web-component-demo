import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';

import {  Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatButtonModule, MatButton} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CustomCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(CustomCounterComponent, { injector: this.injector });
    customElements.define('custom-counter', el);
  }
 }

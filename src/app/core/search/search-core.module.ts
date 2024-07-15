import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SearchCoreComponent } from './search-core.component';


@NgModule({
  declarations: [
    SearchCoreComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  exports: [
    SearchCoreComponent
  ]
})
export class FlightSearchComponentModule { }

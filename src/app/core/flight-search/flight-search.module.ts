import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlightSearchComponent } from './flight-search.component';
import { flightSearchRoutingModule } from './flight-search.routing';

@NgModule({
  declarations: [
    FlightSearchComponent
  ],
  imports: [
    BrowserModule,
    flightSearchRoutingModule
  ],
  providers: [],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightSearchComponentModule { }

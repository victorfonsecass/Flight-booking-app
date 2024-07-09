import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './core/flight-search/flight-search.component';
import { HomeComponent } from './core/home/home.component';
import { ResultsComponent } from './core/results/results.component';
import { SharedComponent } from './shared/shared.component';
import { CheckoutComponent } from './core/checkout/checkout.component';
import { PassangerDetailsComponent } from './core/passanger-details/passanger-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    HomeComponent,
    ResultsComponent,
    SharedComponent,
    CheckoutComponent,
    PassangerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

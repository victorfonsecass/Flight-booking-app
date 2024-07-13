import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { FlightSearchComponent } from './core/flight-search/flight-search.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'home'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

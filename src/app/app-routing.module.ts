import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { SearchCoreComponent } from './core/search/search-core.component';
import { HomeCoreComponent } from './core/home/home-core.component';

const routes: Routes = [
  { path: '', component: HomeCoreComponent
  },
  {
    path: '',
    component: HomeCoreComponent
  },
  {
    path: 'flight-search',
    component: SearchCoreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

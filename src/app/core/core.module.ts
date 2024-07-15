import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CommonModule } from '@angular/common';
import { HomeCoreComponent } from './home/home-core.component';
import { SearchCoreComponent } from './search/search-core.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CoreComponent,
    HomeCoreComponent,
    SearchCoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CoreComponent
  ]

})
export class CoreModule { }

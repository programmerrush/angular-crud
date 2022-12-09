import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home2RoutingModule } from './home2-routing.module';
import { Home2Component } from './home2/home2.component';


@NgModule({
  declarations: [Home2Component],
  imports: [
    CommonModule,
    Home2RoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Home2Module { }

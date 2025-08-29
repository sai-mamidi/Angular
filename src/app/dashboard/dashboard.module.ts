import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '../sharedmodule/sharedmodule.module';
import { NgChartsModule } from 'ng2-charts';
import { TestComponent } from './text/test.component';


@NgModule({
  declarations: [
    ViewComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgChartsModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './sharedmodule/sharedmodule.module';
import { DashboardModule } from './dashboard/dashboard.module';
import GlobalVariables from './contstant';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReqHandlerrInterceptor } from './req-handlerr.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [GlobalVariables,
     { provide: HTTP_INTERCEPTORS, useClass: ReqHandlerrInterceptor, multi: true }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

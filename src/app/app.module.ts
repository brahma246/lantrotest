import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMeterialModule } from './angular-meterial/angular-meterial.module';
import { UserprofileComponent } from './dashboard/userprofile/userprofile.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent.component';
import { HeaderComponent } from './header/header.component';
import {  RefreshService } from './dashboard/service/refreshservice.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserprofileComponent,
    LoginpageComponent,
    PagenotfoundcomponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMeterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

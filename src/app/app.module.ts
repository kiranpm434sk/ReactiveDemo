import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TaskdisplayDirective } from './taskdisplay.directive';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { TaskaddComponent } from './taskdisplay/taskadd/taskadd.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Interceptordemo } from './intercepterdemo';
import { Product1Component } from './product1/product1.component';
import { HomeComponent } from './home/home.component';
import { CustomerModule } from './customer/customer.module';

import { ProdReactiveDemoComponent } from './prod-reactive-demo/prod-reactive-demo.component';
import { TaskReactiveDemoComponent } from './task-reactive-demo/task-reactive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagenotfoundComponent,
    TaskdisplayDirective,
    TaskdisplayComponent,
    EdittaskComponent,
    TaskaddComponent,
    SignupReactiveDemoComponent,
    EdituserreactiveComponent,
    LoginComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Product1Component,
    HomeComponent, ProdReactiveDemoComponent, TaskReactiveDemoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


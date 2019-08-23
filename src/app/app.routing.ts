import { Routes,RouterModule, PreloadAllModules } from "@angular/router";
import { TaskdisplayComponent } from "./taskdisplay/taskdisplay.component";
import { EdittaskComponent } from "./taskdisplay/edittask/edittask.component";
import { TaskaddComponent } from "./taskdisplay/taskadd/taskadd.component";
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from "./user-guard.service";
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Product1Component } from './product1/product1.component';
import { ProductResolveService } from './product-resolve.service';
import { HomeComponent } from './home/home.component';
import { ProdReactiveDemoComponent } from './prod-reactive-demo/prod-reactive-demo.component';
import { TaskReactiveDemoComponent } from './task-reactive-demo/task-reactive-demo.component';
const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'product1',resolve:{pdata:ProductResolveService},component:Product1Component},
  {path:'addtask',component:TaskaddComponent},
  {path:'task',component:TaskdisplayComponent},
  {path:'edituserreactive/:user_email',component:EdituserreactiveComponent},
  {path:'edittask/:id',component:EdittaskComponent},
  {path:'login',component:LoginComponent},
  {path:'task-reactive',component:TaskReactiveDemoComponent},
  {path:'signup2',canActivate:[UserGuardService],component:SignupReactiveDemoComponent},
  {path:'demo',component:DemoComponent},
  {path:'demo1/:id',component:Demo1Component},
  {path:'demo2',component:Demo2Component},
  {path:'product',canLoad:[UserGuardService],loadChildren:'./productdisplay/product.module#ProductModule'},
  // {path:'product',loadChildren:'./display/user.module#UserModule'},
  {path:'users',data:{preload:true},loadChildren:'./userdisplay/user.module#UserModule'},
  {path:'reactive',component:ProdReactiveDemoComponent}
];

export const routing=RouterModule.forRoot(arr,{preloadingStrategy:PreloadAllModules});



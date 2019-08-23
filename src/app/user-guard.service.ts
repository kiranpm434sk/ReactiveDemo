// import { Injectable } from '@angular/core';
// import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { UserdataService } from "./userdisplay/userdata.service";
// import { url } from 'inspector';
// @Injectable({
//   providedIn: 'root'
// })
// export class UserGuardService implements CanActivate {

//   constructor(private _userdata:UserGuardService,private -router:Router) { }
//   canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
//   return this.isUserLoggedIn(state);

//   }
//   isUserLoggedIn(url:string):boolean{
//     if(this._userdata.isLoggedIn){
//       return true;
//     }
//   this._userdata.redirectURL=url;
//   this._router.navigate(['/login']);
//   return false;
//   }
// }




import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad ,Route } from '@angular/router';
import { UserdataService } from './userdisplay/userdata.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate ,CanLoad{

  constructor(private _userdata:UserdataService,private _router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

      return this.isUserLoggedIn(state.url);
  }
  canLoad(_route:Route){
    return this.isUserLoggedIn(_route.path);
  }
  isUserLoggedIn(url:string):boolean{

    if(this._userdata.isLoggedIn){
      return true;
    }
    this._userdata.redirectURL=url;
    this._router.navigate(['/login']);
    return false;
  }
}

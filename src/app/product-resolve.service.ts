import { Injectable } from '@angular/core';
import { ProductdataService } from './productdisplay/productdata.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { productResolved } from './productdisplay/product';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<productResolved> {

  constructor(private _productdata:ProductdataService) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
    return this._productdata.getAllProducts().pipe(
      map(x=>({products:x,errormsg:''})),
      catchError(error=>{
        return of({products:null,errormsg:'somthing went wrong'})
      })
    );
  }
}

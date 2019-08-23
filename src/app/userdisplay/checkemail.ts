// import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
// import { map, delay } from 'rxjs/operators';
// import { Observable } from "rxjs";
// import { UserdataService } from './userdata.service';
// import { User } from './user';
// export class CheckEmail {
//   static emailcheck(x:UserdataService): AsyncValidatorFn {

//     return (c: AbstractControl): Observable<{ [s: string]: boolean } | null> => {
//       return x.getUserByEmail(c.value).pipe(
//         delay(1000),
//         map((res: User[]) => {
//           console.log(res);
//           if (res.length != 0) {
//             return {'invalidEmail': true };
//           }
//         })
//       );
//     }
//   }
//    static existingEmailValidator(userService: UserdataService): AsyncValidatorFn {
//     return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
//       return userService.getUserByEmail(control.value).pipe(
//         delay(1000),
//       map((users:User[]) => {
//           return (users && users.length > 0) ? {"EmailExists": true} : null;
//         }
//       )
//       );
//     };
//   }
// }


import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, delay, switchMap } from 'rxjs/operators';
import { Observable, timer } from "rxjs";
import { User } from './user';
import { UserdataService } from './userdata.service';

export class CheckEmail {

static  emailValidator(x:UserdataService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return x.getUserByEmail(control.value)
        .pipe(
          map((res:User[]) => {
            if (res.length==1) {
              return { 'emailInUse': true};
            }
          })
        );
    };

  }

}

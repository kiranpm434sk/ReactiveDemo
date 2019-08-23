import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, AbstractControl, FormGroup,FormArray} from "@angular/forms";
import { tick } from '@angular/core/testing';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customer:FormGroup;
invalidName:string[]=['xyz','abc'];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
this.customer=this.fb.group({
  fname:new FormControl(null,[Validators.required,Validators.minLength(4),this.checkFirstName.bind(this)]),
      lname:new FormControl(null),
      pwdGroup:new FormGroup({
        pwd: new FormControl(null,Validators.required),
        cnf_pwd: new FormControl(null,Validators.required)
      },this.matchpwd.bind(this)),
      email: new FormControl(),
      mob_no: new FormControl(),
      notification: new FormControl('email'),
      hobby: new FormArray([])
  });
  this.customer.get('notification').valueChanges.subscribe(
    (x)=>{
      let email=this.customer.get('email');
      let mob_no=this.customer.get('mob_no');
      if(x=='email')
      {
        email.setValidators(Validators.required);
        mob_no.clearValidators();
      }
      else{
        email.clearValidators();
        mob_no.setValidators(Validators.required);
      }
      email.updateValueAndValidity();
      mob_no.updateValueAndValidity();

    }

  );
}

getControls(){
  return(<FormArray>this.customer.get('hobby')).controls;
}

checkFirstName(x:AbstractControl):{[y:string]:boolean}
{
  let value=x.value;
  if(this.invalidName.indexOf(value)!== -1){
    return {invalidName:true};
  }
  return null;
}
matchpwd(x:AbstractControl):{[y:string]:boolean}
{
  let password=x.get('pwd').value;
  let cnfpwd=x.get('cnf_pwd').value;
  if(password!=cnfpwd)
  {
    return{'passwordNotMatched':true};
  }
  return null;

}




  onsubmit()
  {
    console.log(this.customer);
  }


  onAddHobbyClicked(){
    let control=new FormControl(null,Validators.required);
    (<FormArray>this.customer.get('hobby')).push(control);
  }
  onDeleteHobbyClicked(i)
  {
    (<FormArray>this.customer.get('hobby')).removeAt(i);
  }

}

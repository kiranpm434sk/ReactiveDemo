import { Component, OnInit } from '@angular/core';
import { UserdataService } from './userdata.service';
import { User } from './user';
import { Router } from "@angular/router";
@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
arr:User[]=[];
name:string="watch";
loading:boolean=true;
  constructor(private _data:UserdataService,private _router:Router) { }

  ngOnInit() {
    this.loading=true;
    this._data.getAllUsers().subscribe(
      (data:User[])=>{
        this.arr=data;
        this.loading=false;
      }
    );
  }
  onUserDelete(item:User){
    this._data.deleteUser(item.user_email).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(item),1);
        alert('deleted');
      }
    );
  }

  onUserEdit(item:User){
    this._router.navigate(['/edituser',item.user_email]);
  }
  onSideBarClick(value) {
    if (value != "") {
      this.arr = this.arr.filter(x => x.user_name.indexOf(value) != -1);
    } else {
      this._data.getAllUsers().subscribe(
        (data: User[]) => {
          this.arr = data;
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
    }
  }
  search(value) {
    if (value != "") {
      this.arr = this.arr.filter(x => x.user_email.indexOf(value) != -1);
    } else {
      this._data.getAllUsers().subscribe(
        (data: User[]) => {
          this.arr = data;
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
    }
  }
  onUserEditReactive(item:User){
    this._router.navigate(['/users/edituserreactive',item.user_email]);
  }
}





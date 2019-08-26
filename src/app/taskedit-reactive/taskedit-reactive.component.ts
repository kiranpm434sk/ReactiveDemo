import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskdataService } from '../taskdisplay/taskdata.service';
import { Task } from '../taskdisplay/task';

@Component({
  selector: 'app-taskedit-reactive',
  templateUrl: './taskedit-reactive.component.html',
  styleUrls: ['./taskedit-reactive.component.css']
})
export class TaskeditReactiveComponent implements OnInit {

  id:number;
  title:string='';
  status:string='';
  constructor(private _act:ActivatedRoute,private _data:TaskdataService,private _router:Router) { }

  ngOnInit() {
    this.id= this._act.snapshot.params["id"];
    this._data.getTaskById(this.id).subscribe(
     (data:Task[])=>{
       this.title=data[0].Title;
       this.status=data[0].Status;
     }
    );

   }
   onEditTask(f){
    this._data.editTask(this.id,f.value).subscribe(
      (data:any)=>{
        alert('updated');
      }
    );
}
}

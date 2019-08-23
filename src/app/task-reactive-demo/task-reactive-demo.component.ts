import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
import { Task } from '../taskdisplay/task';
import { TaskdataService } from '../taskdisplay/taskdata.service';
@Component({
  selector: 'app-task-reactive-demo',
  templateUrl: './task-reactive-demo.component.html',
  styleUrls: ['./task-reactive-demo.component.css']
})
export class TaskReactiveDemoComponent implements OnInit {

  taskapp: FormGroup;
  arr: Task[] = [];
  // debouncer: any;
  constructor(private fb: FormBuilder, private _data: TaskdataService) {}

  ngOnInit() {
    this.taskapp = this.fb.group({
      Id: new FormControl(null),
      Title: new FormControl(null),
      Status:new FormControl(null)

    });
    this._data.getAllTasks().subscribe(
      (data: Task[]) => {
        this.arr = data;
      },
      function(error) {
        alert(error);
      },
      function() {}
    );
  }
  onTaskDelete(item: Task) {
    this._data.deleteTask(item.Id).subscribe((data: any) => {
      this.arr.splice(this.arr.indexOf(item), 1);
    });
  }
  // onTaskEdit(item:Task){
  //   this._router.navigate(['/edittask',item.Id]);
  // }

  // onTaskSave() {
  //   this._data
  //     .addTask(
  //       new Task(
  //         this.taskapp.value.Id,
  //         this.taskapp.value.Title,
  //         this.taskapp.value.Status

  //       )
  //     )
  //     .subscribe((x: any) => {
  //       alert("record added");
  //     });
  // }

  onSideBarClick(value) {
    if (value != "") {
      this.arr = this.arr.filter(x => x.Id.indexOf(value) != -1);
    } else {
      this._data.getAllTasks().subscribe(
        (data: Task[]) => {
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
      this.arr = this.arr.filter(x => x.Id.indexOf(value) != -1);
    } else {
      this._data.getAllTasks().subscribe(
        (data: Task[]) => {
          this.arr = data;
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
    }
  }

}

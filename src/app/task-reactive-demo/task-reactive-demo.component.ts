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
  // debouncer: any;
  constructor(private fb: FormBuilder, private _data: TaskdataService) {}

  ngOnInit() {
    this.taskapp = this.fb.group({
      Id: new FormControl(null),
      Title: new FormControl(null),
      Status:new FormControl(null)

    });
  }
  onTaskSave() {
    this._data
      .addTask(
        new Task(
          this.taskapp.value.Id,
          this.taskapp.value.Title,
          this.taskapp.value.Status

        )
      )
      .subscribe((x: any) => {
        alert("record added");
      });
  }

}

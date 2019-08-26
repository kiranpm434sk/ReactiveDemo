import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../taskdisplay/taskdata.service';
import { Task } from '../taskdisplay/task';

@Component({
  selector: 'app-taskadd-reactive',
  templateUrl: './taskadd-reactive.component.html',
  styleUrls: ['./taskadd-reactive.component.css']
})
export class TaskaddReactiveComponent implements OnInit {

  arr: Task[] = [];
  constructor(private _data: TaskdataService) {}

  ngOnInit() {}
  onSaveTask(f) {
    this._data.addTask(f.value).subscribe((data: any) => {
      alert("record added");
    });

}

}

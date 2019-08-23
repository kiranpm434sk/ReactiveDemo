import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskReactiveDemoComponent } from './task-reactive-demo.component';

describe('TaskReactiveDemoComponent', () => {
  let component: TaskReactiveDemoComponent;
  let fixture: ComponentFixture<TaskReactiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskReactiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskReactiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskaddReactiveComponent } from './taskadd-reactive.component';

describe('TaskaddReactiveComponent', () => {
  let component: TaskaddReactiveComponent;
  let fixture: ComponentFixture<TaskaddReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskaddReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskaddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

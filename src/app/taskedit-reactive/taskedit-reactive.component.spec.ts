import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskeditReactiveComponent } from './taskedit-reactive.component';

describe('TaskeditReactiveComponent', () => {
  let component: TaskeditReactiveComponent;
  let fixture: ComponentFixture<TaskeditReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskeditReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskeditReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

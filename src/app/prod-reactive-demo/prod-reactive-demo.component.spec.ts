import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdReactiveDemoComponent } from './prod-reactive-demo.component';

describe('ProdReactiveDemoComponent', () => {
  let component: ProdReactiveDemoComponent;
  let fixture: ComponentFixture<ProdReactiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdReactiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdReactiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

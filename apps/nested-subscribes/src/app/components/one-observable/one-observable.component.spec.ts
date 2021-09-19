import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneObservableComponent } from './one-observable.component';

describe('OneObservableComponent', () => {
  let component: OneObservableComponent;
  let fixture: ComponentFixture<OneObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

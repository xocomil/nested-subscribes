import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergedObservablesComponent } from './merged-observables.component';

describe('MergedObservablesComponent', () => {
  let component: MergedObservablesComponent;
  let fixture: ComponentFixture<MergedObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergedObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergedObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

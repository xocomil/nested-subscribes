import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchMapObservablesComponent } from './switch-map-observables.component';

describe('MergedObservablesComponent', () => {
  let component: SwitchMapObservablesComponent;
  let fixture: ComponentFixture<SwitchMapObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchMapObservablesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMapObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

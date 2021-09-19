import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedSubscribeComponent } from './nested-subscribe.component';

describe('NestedSubscribeComponent', () => {
  let component: NestedSubscribeComponent;
  let fixture: ComponentFixture<NestedSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

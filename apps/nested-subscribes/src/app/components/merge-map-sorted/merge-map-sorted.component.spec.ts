import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapSortedComponent } from './merge-map-sorted.component';

describe('MergeMapSortedComponent', () => {
  let component: MergeMapSortedComponent;
  let fixture: ComponentFixture<MergeMapSortedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapSortedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMapSortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

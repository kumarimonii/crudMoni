import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailsDialogComponent } from './emp-details-dialog.component';

describe('EmpDetailsDialogComponent', () => {
  let component: EmpDetailsDialogComponent;
  let fixture: ComponentFixture<EmpDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(EmpDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

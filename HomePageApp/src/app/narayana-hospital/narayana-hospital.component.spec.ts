import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarayanaHospitalComponent } from './narayana-hospital.component';

describe('NarayanaHospitalComponent', () => {
  let component: NarayanaHospitalComponent;
  let fixture: ComponentFixture<NarayanaHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarayanaHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarayanaHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

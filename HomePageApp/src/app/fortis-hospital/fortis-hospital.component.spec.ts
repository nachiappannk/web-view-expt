import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortisHospitalComponent } from './fortis-hospital.component';

describe('FortisHospitalComponent', () => {
  let component: FortisHospitalComponent;
  let fixture: ComponentFixture<FortisHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortisHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortisHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

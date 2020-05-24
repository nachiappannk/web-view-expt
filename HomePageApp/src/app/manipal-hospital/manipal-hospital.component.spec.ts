import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipalHospitalComponent } from './manipal-hospital.component';

describe('ManipalHospitalComponent', () => {
  let component: ManipalHospitalComponent;
  let fixture: ComponentFixture<ManipalHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipalHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipalHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipalLoginComponent } from './manipal-login.component';

describe('ManipalLoginComponent', () => {
  let component: ManipalLoginComponent;
  let fixture: ComponentFixture<ManipalLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipalLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

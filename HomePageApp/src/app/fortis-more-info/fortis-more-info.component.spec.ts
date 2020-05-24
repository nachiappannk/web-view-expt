import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortisMoreInfoComponent } from './fortis-more-info.component';

describe('FortisMoreInfoComponent', () => {
  let component: FortisMoreInfoComponent;
  let fixture: ComponentFixture<FortisMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortisMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortisMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

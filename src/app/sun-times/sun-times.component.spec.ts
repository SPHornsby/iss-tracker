import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunTimesComponent } from './sun-times.component';

describe('SunTimesComponent', () => {
  let component: SunTimesComponent;
  let fixture: ComponentFixture<SunTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

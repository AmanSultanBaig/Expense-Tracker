import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthBarComponent } from './month-bar.component';

describe('MonthBarComponent', () => {
  let component: MonthBarComponent;
  let fixture: ComponentFixture<MonthBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

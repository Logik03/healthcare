import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodPressureChartComponent } from './blood-pressure-chart.component';

describe('BloodPressureChartComponent', () => {
  let component: BloodPressureChartComponent;
  let fixture: ComponentFixture<BloodPressureChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodPressureChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloodPressureChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

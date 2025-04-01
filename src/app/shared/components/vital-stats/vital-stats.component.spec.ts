import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalStatsComponent } from './vital-stats.component';

describe('VitalStatsComponent', () => {
  let component: VitalStatsComponent;
  let fixture: ComponentFixture<VitalStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitalStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VitalStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

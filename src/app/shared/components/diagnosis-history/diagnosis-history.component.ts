import { Component, Input } from '@angular/core';
import { BloodPressureChartComponent } from '../blood-pressure-chart/blood-pressure-chart.component';
import { VitalStatsComponent } from '../vital-stats/vital-stats.component';

@Component({
  selector: 'app-diagnosis-history',
  standalone: true,
  imports: [
    BloodPressureChartComponent,
    VitalStatsComponent
  ],
  templateUrl: './diagnosis-history.component.html',
  styleUrl: './diagnosis-history.component.scss'
})
export class DiagnosisHistoryComponent {

  @Input() diagnosisHistory: { 
    month: string; 
    year: number; 
    blood_pressure: { 
      systolic: { 
        value: number; 
        levels: string; 
      }; 
      diastolic: { 
        value: number; 
        levels: string; 
      }; 
    }; 
  }[] = [];


  ngOnChanges() {
    console.log('DiagnosisHistoryComponent received:', this.diagnosisHistory);
  }

}

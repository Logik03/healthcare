import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { BaseChartDirective } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js';
import { CoalitionApiService } from '../../../core/services/coalition-api.service';

// Register the required components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);



@Component({
  selector: 'app-blood-pressure-chart',
  standalone: true,
  imports: [ CommonModule, BaseChartDirective, FormsModule, MatCardModule, MatSelectModule],
  templateUrl: './blood-pressure-chart.component.html',
  styleUrl: './blood-pressure-chart.component.scss'
})
export class BloodPressureChartComponent implements  OnChanges  {
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
  chart: any;
  selectedPeriod = 'Last 6 months';

  ngOnChanges() {
    console.log('BloodPressureChartComponent received:', this.diagnosisHistory);
    if (this.diagnosisHistory && this.diagnosisHistory.length > 0) {
      this.createChart();
    }
  }
  
  createChart() {
    const canvas = document.getElementById('bloodPressureChart') as HTMLCanvasElement;
  
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }
  
    // Extract data dynamically from diagnosisHistory
    const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'short' });

    const sortedHistory = [...this.diagnosisHistory].sort((a, b) => {
      const dateA = new Date(`${a.month} 1, ${a.year}`);
      const dateB = new Date(`${b.month} 1, ${b.year}`);
      return dateA.getTime() - dateB.getTime();
    });

    const labels = sortedHistory.map(item => {
      const date = new Date(`${item.month} 1, ${item.year}`);
      const shortMonth = monthFormatter.format(date); // Get shorthand month
      return `${shortMonth}, ${item.year}`;
    });
    const systolicData = this.diagnosisHistory.map(item => item.blood_pressure.systolic.value);
    const diastolicData = this.diagnosisHistory.map(item => item.blood_pressure.diastolic.value);
    console.log( systolicData, 'i am systolicData')
    console.log( diastolicData, 'i am diastolic Data')
    console.log( labels, 'i am labels')
    console.log( this.diagnosisHistory, 'i am history')
  
    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels, // Use dynamic labels
        datasets: [
          {
            label: 'Systolic',
            data: systolicData, // Use dynamic systolic data
            borderColor: '#E770FF',
            backgroundColor: '#E770FF',
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#E770FF',
            borderWidth: 2,
            fill: false
          },
          {
            label: 'Diastolic',
            data: diastolicData, // Use dynamic diastolic data
            borderColor: '#818CF8',
            backgroundColor: '#818CF8',
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#818CF8',
            borderWidth: 2,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            min: 60,
            max: 180,
            ticks: {
              stepSize: 20,
              color: '#666',
              font: {
                family: "'Arial', sans-serif",
                size: 12
              }
            },
            grid: {
              color: '#E5E7EB'
            },
            border: {
              display: false,
              dash: [0]
            }
          },
          x: {
            grid: {
              color: '#E5E7EB'
            },
            ticks: {
              color: '#666',
              font: {
                family: "'Arial', sans-serif",
                size: 12
              }
            },
            border: {
              display: false,
              dash: [0]
            }
          }
        }
      }
    });
  }

  
}

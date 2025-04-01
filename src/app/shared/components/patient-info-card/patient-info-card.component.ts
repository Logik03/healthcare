import { Component, Input } from '@angular/core';
import { ProfileInfo } from '../../../core/models/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-info-card',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './patient-info-card.component.html',
  styleUrl: './patient-info-card.component.scss'
})
export class PatientInfoCardComponent {
  @Input() user: ProfileInfo | null = null; 
  
}

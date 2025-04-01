import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-vital-stats',
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatIconModule],
  templateUrl: './vital-stats.component.html',
  styleUrl: './vital-stats.component.scss'
})
export class VitalStatsComponent {

}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-lab-results',
  standalone: true,
  imports: [ MatIconModule,MatListModule, CommonModule],
  templateUrl: './lab-results.component.html',
  styleUrl: './lab-results.component.scss'
})
export class LabResultsComponent {
  @Input() results: any[] = [];
}

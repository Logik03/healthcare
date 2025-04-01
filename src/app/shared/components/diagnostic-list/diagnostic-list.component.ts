import { Component, Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-diagnostic-list',
  standalone: true,
  imports: [ MatTableModule],
  templateUrl: './diagnostic-list.component.html',
  styleUrl: './diagnostic-list.component.scss'
})
export class DiagnosticListComponent {
  @Input() diagnostics : any[] = [];
  columns = ['problem', 'description', 'status'];
}

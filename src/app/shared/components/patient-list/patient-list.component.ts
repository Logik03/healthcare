import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [
    CommonModule, 
    MatListModule, 
    MatIconModule, 
    //MatInputModule
  ],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss'
})
export class PatientListComponent {

  @Input() patients: any[] = [];
  @Output() patientSelected = new EventEmitter<any>();

  selectedPatientId: string | null = null;
  onSelect(patient: any): void {
    this.patientSelected.emit(patient);
  }

}

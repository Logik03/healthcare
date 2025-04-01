import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { PatientListComponent } from '../../shared/components/patient-list/patient-list.component';
import { DiagnosisHistoryComponent } from '../../shared/components/diagnosis-history/diagnosis-history.component';
import { DiagnosticListComponent } from '../../shared/components/diagnostic-list/diagnostic-list.component';
import { PatientInfoCardComponent } from '../../shared/components/patient-info-card/patient-info-card.component';
import { LabResultsComponent } from '../../shared/components/lab-results/lab-results.component';
import { CoalitionApiService } from '../../core/services/coalition-api.service';
import { ProfileInfo } from '../../core/models/interfaces';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    PatientListComponent,
    DiagnosisHistoryComponent,
    DiagnosticListComponent,
    PatientInfoCardComponent,
    LabResultsComponent 
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  patientList : any [] = [];
  labResult : any[] = [];
  diagnosisList:any[] = [];
  diagnosisHistory:any[] = [];
  patientInfo!: ProfileInfo ;

  constructor(private service : CoalitionApiService ) { }
  
  
  
  async ngOnInit() {
    await this.getPatientData();
  }


  async getPatientData() {
    this.service.getPatientData().subscribe((res: any) => {
       console.log(res, 'i am response from the api subscription');
       this.patientList = res;
     
        const jessicaData = res.find((patient: any) => patient.name === 'Jessica Taylor');
        if (!jessicaData) {
          console.log('Jessica Taylor not found');
          return; 
        }
        this.diagnosisList = jessicaData?.diagnostic_list || [];
        this.labResult = (jessicaData?.lab_results || []).map((result: string) => ({ name: result }));
        this.diagnosisHistory = jessicaData?.diagnosis_history || [];
        const profileInfo: ProfileInfo = {
          name: jessicaData?.name,  
          age: jessicaData?.age || [],  
          contactInfo: jessicaData?.phone_number,
          dateOfBirth :jessicaData?.date_of_birth,
          profilePicture :jessicaData?.profile_picture,
          insuranceProvider:jessicaData?.insurance_type,
          gender : jessicaData?.gender,
          emergencyContact : jessicaData?.phone_number,
        };
        this.patientInfo = profileInfo;
        console.log(this.diagnosisHistory, 'Diagnostic list for Jessica Taylor');
        });
      }

}

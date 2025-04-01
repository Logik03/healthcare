import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoalitionApiService {



constructor(private http: HttpClient) { }


  getPatientData() {
    let url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
    return this.http.get(url);
  }
}

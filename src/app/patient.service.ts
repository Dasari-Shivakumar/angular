import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseURL = "http://localhost:8082/patient";


  constructor(private httpClient: HttpClient) { }
  
  getPatient(id:number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`);
  }

  createPatient(patient:Patient): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/`, patient);
  }
}

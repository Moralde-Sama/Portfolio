import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { WorkExperience } from './work-experience.class';

@Injectable({
  providedIn: 'root'
})
export class WorkexperienceService {

  constructor(private http: HttpClient) { }

  getWorkExperience() {
     return this.http.get<Array<WorkExperience>>('assets/data/workexperience.json').toPromise();
  }
}

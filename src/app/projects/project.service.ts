import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project.class';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  async getProjects() {
    return await this.http.get<Array<Object>>('https://asia-northeast1-my-portfolio-f5086.cloudfunctions.net/projects').toPromise();
  }
}

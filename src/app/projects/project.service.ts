import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<Array<object>>('assets/data/projects.json').toPromise();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { WorkExperience } from './work-experience.interface';
import { Resolve } from '@angular/router';

@Injectable()
export class WorkexperienceService implements Resolve<WorkExperience[]> {

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): WorkExperience[] | import("rxjs").Observable<WorkExperience[]> | Promise<WorkExperience[]> {
    return this.getWorkExperience();
  }

  constructor(private http: HttpClient) { }

  private getWorkExperience() {
     return this.http.get<Array<WorkExperience>>('assets/data/workexperience.json').toPromise();
  }
}

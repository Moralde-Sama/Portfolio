import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';

@Injectable()
export class ProjectService implements Resolve<object> {

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): object | import("rxjs").Observable<object> | Promise<object> {
    return this.getProjects();
  }

  constructor(private http: HttpClient) { }

  private getProjects() {
    return this.http.get<Array<object>>('assets/data/projects.json').toPromise();
  }
}

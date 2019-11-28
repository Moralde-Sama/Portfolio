import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkExperienceComponent } from './work-experience.component';
import { WorkexperienceService } from './workexperience.service';

const routes: Routes = [
  {
    path: '',
    component: WorkExperienceComponent,
    pathMatch: 'full',
    resolve: { experiences: WorkexperienceService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    WorkexperienceService
  ]
})
export class WorkExperienceRoutingModule { }

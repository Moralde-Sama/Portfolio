import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkExperienceComponent } from './work-experience.component';

const routes: Routes = [
  {
    path: '',
    component: WorkExperienceComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkExperienceRoutingModule { }
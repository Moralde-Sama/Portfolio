import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'workexperience',
    loadChildren: './work-experience/work-experience.module#WorkExperienceModule'
  },
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule'
  },
  {
    path: 'resume',
    loadChildren: './resume/resume.module#ResumeModule'
  },
  {
    path: 'aboutme',
    loadChildren: './about-me/about-me.module#AboutMeModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

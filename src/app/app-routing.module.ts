import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'workexperience', component: WorkExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent},
  { path: 'aboutme', component: AboutMeComponent }
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

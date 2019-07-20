import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { AnimationDelayDirective } from './directive/animation-delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WorkExperienceComponent,
    NavigationBarComponent,
    ProjectsComponent,
    AboutMeComponent,
    ProjectCardComponent,
    AnimationDelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

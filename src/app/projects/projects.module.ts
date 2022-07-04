import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsComponent } from './projects.component';
import { ProjectService } from './project.service';
import { AnimationDelayDirective } from '../directive/animation-delay.directive';

@NgModule({
    declarations: [
        ProjectsComponent,
        ProjectCardComponent,
        AnimationDelayDirective
    ],
    imports: [
        CommonModule,
        ProjectsRoutingModule
    ],
    providers: [
        ProjectService
    ]
})
export class ProjectsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkExperienceRoutingModule } from './work-experience-routing.module';
import { WorkExperienceItemComponent } from './work-experience-item/work-experience-item.component';
import { WorkExperienceComponent } from './work-experience.component';
import { WorkexperienceService } from './workexperience.service';

@NgModule({
  declarations: [
    WorkExperienceComponent,
    WorkExperienceItemComponent
  ],
  imports: [
    CommonModule,
    WorkExperienceRoutingModule
  ],
  entryComponents: [
    WorkExperienceComponent
  ],
  providers: [
    WorkexperienceService
  ]
})
export class WorkExperienceModule { }

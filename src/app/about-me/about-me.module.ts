import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { MySkillsModule } from './my-skills/my-skills.module';

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    MySkillsModule
  ],
  entryComponents: [
    AboutMeComponent
  ]
})
export class AboutMeModule { }

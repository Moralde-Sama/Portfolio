import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySkillsComponent } from './my-skills.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { MobileDevelopmentComponent } from './mobile-development/mobile-development.component';
import { DesktopDevelopmentComponent } from './desktop-development/desktop-development.component';

@NgModule({
  declarations: [
    MySkillsComponent,
    WebDevelopmentComponent,
    MobileDevelopmentComponent,
    DesktopDevelopmentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MySkillsComponent
  ]
})
export class MySkillsModule { }

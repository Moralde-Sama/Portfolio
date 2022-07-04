import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { MySkillsModule } from './my-skills/my-skills.module';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
    declarations: [
        AboutMeComponent,
        ContactsComponent
    ],
    imports: [
        CommonModule,
        AboutMeRoutingModule,
        MySkillsModule
    ]
})
export class AboutMeModule { }

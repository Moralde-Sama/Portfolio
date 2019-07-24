import { Component, OnInit, Input } from '@angular/core';
import { WorkExperience } from '../work-experience.class';

@Component({
  selector: 'app-work-experience-item',
  templateUrl: './work-experience-item.component.html',
  styleUrls: []
})
export class WorkExperienceItemComponent implements OnInit {
  @Input() experience: WorkExperience;
  constructor() { }

  ngOnInit() {
  }

}

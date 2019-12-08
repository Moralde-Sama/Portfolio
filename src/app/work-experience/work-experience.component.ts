import { Component, OnInit } from '@angular/core';
import { WorkexperienceService } from './workexperience.service'
import { WorkExperience } from './work-experience.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: [],
  providers: [WorkexperienceService]
})
export class WorkExperienceComponent implements OnInit {
  public experiences: Array<WorkExperience>;
  constructor(private workService: WorkexperienceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.workService.getWorkExperience().then((result) => {
    //   this.experiences = result;
    // });
    window.scrollTo(0, 0);
    this.activatedRoute.data.subscribe((resolveData: { experiences: WorkExperience[]}) => {
      this.experiences = resolveData.experiences;
    });
  }
}

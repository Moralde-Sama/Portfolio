import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Array<Project> = [];
  constructor(private project_service: ProjectService, private actived_route: ActivatedRoute) { }

  ngOnInit() {
    // this.project_service.getProjects().then((data) => {
    //   data.forEach((value) => {
    //     const project: Project = new Project();
    //     Project.getKeys().forEach(key => {
    //       project[key] = value[key];
    //     });
    //     this.projects[this.projects.length] = project;
    //   });
    // });
    window.scrollTo(0, 0);
    this.actived_route.data.subscribe((resolved_data: any) => {
      resolved_data['projects'].forEach((value) => {
        const project = new Project();
        Project.getKeys().forEach(key => {
          project[key] = value[key];
        });
        this.projects[this.projects.length] = project;
      });
    });
  }

}

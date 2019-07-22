import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project.class';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Array<Project> = [];
  constructor(private project_service: ProjectService) { }

  ngOnInit() {
    this.project_service.getProjects().then((data) => {
      data.forEach((value) => {
        const project: Project = new Project();
        Project.getKeys().forEach(key => {
          project[key] = value[key];
        });
        this.projects[this.projects.length] = project;
        console.log(this.projects);
      });
    });
  }

}

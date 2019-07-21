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

  async ngOnInit() {
    await this.project_service.getProjects().then((data) => {
      data.forEach((value) => {
        const project = new Project();
        project.title = value['title'];
        project.description = value['description'];
        project.role = value['role'];
        project.owner_name = value['owner_name'];
        project.owner_profile = value['owner_profile'];
        project.owner_link = value['owner_link'];
        project.technologies = JSON.parse(value['technologies'])['technologies'];
        this.projects[this.projects.length] = project;
      });
    });
  }

}

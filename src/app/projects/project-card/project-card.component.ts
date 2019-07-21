import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.class';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: []
})
export class ProjectCardComponent implements OnInit {
  @Input() Index: number;
  @Input() Project: Project;
  public index: number;
  public project: Project;
  constructor() { }

  ngOnInit() {
    this.index = this.Index * .5;
    this.project = this.Project;
  }

}

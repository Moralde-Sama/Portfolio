import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.class';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: []
})
export class ProjectCardComponent implements OnInit {
  @Input() Index: number;
  @Input() project: Project;
  public index: number;
  constructor() { }

  ngOnInit() {
    this.index = this.Index * .5;
  }

}

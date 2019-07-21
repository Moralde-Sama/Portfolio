import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: []
})
export class ProjectCardComponent implements OnInit {
  @Input() Index: number;
  public index: number;
  constructor() { }

  ngOnInit() {
    this.index = this.Index * .5;
  }

}

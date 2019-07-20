import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: []
})
export class ProjectsComponent implements OnInit {

  public items: Array<number> = [0, 1, 2, 3, ,4];
  constructor() { }

  ngOnInit() {
  }

}

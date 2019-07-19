import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: []
})
export class NavigationBarComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

  navigate(event: any) {
    const element = document.querySelectorAll('li.navigation-item.selected')[0];
    if(element != undefined) {
      this.renderer.removeClass(element, 'selected');
    }
    this.renderer.addClass(event.path[1], 'selected');
  }

}

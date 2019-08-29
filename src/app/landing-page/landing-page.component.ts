import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: []
})
export class LandingPageComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line: variable-name
  constructor(private _renderer: Renderer2) { }

  ngOnInit() {
    // for ie and edge
    // tslint:disable-next-line: variable-name
    const page_container_elem = document.querySelectorAll('div.page-container')[0];
    this._renderer.addClass(page_container_elem, 'fixed');
  }

  ngOnDestroy(): void {
    // for ie and edge
    // tslint:disable-next-line: variable-name
    const page_container_elem = document.querySelectorAll('div.page-container.fixed')[0];
    this._renderer.removeClass(page_container_elem, 'fixed');
  }
}

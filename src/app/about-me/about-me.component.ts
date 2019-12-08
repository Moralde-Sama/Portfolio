import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: []
})
export class AboutMeComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  showEmail(): void {
    const gmail_elem = document.getElementsByClassName('gmail')[0];
    if(gmail_elem.className.includes('show'))
      this.renderer.removeClass(gmail_elem, 'show');
    else
      this.renderer.addClass(gmail_elem, 'show');
  }

}

import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: []
})
export class AboutMeComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let count = 0;
    const interval = setInterval(() => {
      try {
        const anchor_tag = document.getElementsByClassName('LI-footer LI-row')[0].firstChild;
        this.renderer.setAttribute(anchor_tag, 'target', '_blank');
        this.renderer.setAttribute(anchor_tag, 'rel', 'noopener noreferrer')
        clearInterval(interval);
      } catch(error) {
        if(count > 5)
          clearInterval(interval);
      }
      count++;
    }, 1000);
    
  }

  showLinkedIn(): void {
    const linkedin_elem = document.getElementsByClassName('LI-badge-container-horizontal-dark');
    if(linkedin_elem[0].className.includes('show')){
      this.renderer.removeClass(linkedin_elem[0], 'show')
      this.renderer.addClass(linkedin_elem[0], 'hide')
    }
    else if(linkedin_elem[0].className.includes('hide')){
      this.renderer.removeClass(linkedin_elem[0], 'hide')
      this.renderer.addClass(linkedin_elem[0], 'show')
    } else {
      this.renderer.addClass(linkedin_elem[0], 'show')
    }
  }

  showEmail(): void {
    const gmail_elem = document.getElementsByClassName('gmail')[0];
    if(gmail_elem.className.includes('show'))
      this.renderer.removeClass(gmail_elem, 'show');
    else
      this.renderer.addClass(gmail_elem, 'show');
  }

}

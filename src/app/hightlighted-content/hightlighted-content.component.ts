import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hightlighted-content',
  templateUrl: './hightlighted-content.component.html',
  styleUrls: ['./hightlighted-content.component.scss']
})
export class HightlightedContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    setTimeout(() => {
      document.getElementsByClassName('animate-circle')[0].classList.add('active');
    }, 100);
  }
}

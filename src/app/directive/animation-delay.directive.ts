import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appAnimationDelay]'
})
export class AnimationDelayDirective implements OnInit {
  @Input() Index: number;
  constructor(private el: ElementRef, private renderer: Renderer2) { 
  }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'animation-delay', `${this.Index}s`);
  }
}

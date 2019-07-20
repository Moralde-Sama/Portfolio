import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimationDelay]'
})
export class AnimationDelayDirective {
  @Input() Index: number;
  constructor(private el: ElementRef, private renderer: Renderer2) { 
  }

  ngOnInit() {
    console.log(this.Index)
    this.renderer.setStyle(this.el.nativeElement, 'animation-delay', `${this.Index}s`);
  }
}

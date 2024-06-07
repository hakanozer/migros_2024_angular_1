import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPagetitle]',
  standalone: true
})
export class PagetitleDirective implements OnInit {

  @Input() appTitle = ''

  constructor( private element: ElementRef ) { }

  ngOnInit(): void {
    console.log("PagetitleDirective call")
    this.element.nativeElement.outerHTML = '<h2 class=""><u>'+this.appTitle+'</u></h2>'
  }

}

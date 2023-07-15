import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss'],
})
export class ContentChildComponent implements AfterContentInit {
  @ContentChild('ng-content') selector1?: ElementRef;
  constructor(private renderer: Renderer2) {}
  ngAfterContentInit() {
    if (this.selector1) {
      console.log(this.selector1.nativeElement);
    }
  }
}

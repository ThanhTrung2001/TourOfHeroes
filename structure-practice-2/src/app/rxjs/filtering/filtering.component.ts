import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observer, debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent implements OnInit {
  @ViewChild('clickEvent', { static: true }) buttonRef?: ElementRef;

  ngOnInit(): void {
    this.debounceTimeHandle();
  }
  debounceTimeHandle() {
    const clicks = fromEvent(this.buttonRef?.nativeElement, 'click');
    const result = clicks.pipe(debounceTime(5000));
    result.subscribe((x) => {
      const pointerEvent = x as PointerEvent;
      console.log(pointerEvent.clientX);
    });
  }
}

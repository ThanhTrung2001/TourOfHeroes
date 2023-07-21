import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-widget',
  templateUrl: './book-widget.component.html',
  styleUrls: ['./book-widget.component.scss'],
})
export class BookWidgetComponent {
  @Input() id?: string;
  @Input() name?: string;
}

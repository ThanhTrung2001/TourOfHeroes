import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/core/models/book';

@Component({
  selector: 'app-presentation-component',
  templateUrl: './presentation-component.component.html',
  styleUrls: ['./presentation-component.component.scss'],
})
export class PresentationComponentComponent {
  @Input() books?: Book[];
  @Output() eventEmitter = new EventEmitter<Book>();
  constructor() {}
  deleteBook(book: Book) {
    this.eventEmitter.emit(book);
  }
}

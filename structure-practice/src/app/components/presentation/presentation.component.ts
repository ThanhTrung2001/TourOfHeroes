import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent {
  @Input() books?: Book[];
  @Output() eventEmitter = new EventEmitter<Book>();
  constructor() {}
  deleteBook(book: Book) {
    this.eventEmitter.emit(book);
  }
}

import { Component, Input } from '@angular/core';
import { Observable, debounceTime } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book/book.service';

@Component({
  selector: 'app-bookwidget',
  templateUrl: './bookwidget.component.html',
  styleUrls: ['./bookwidget.component.scss'],
})
export class BookwidgetComponent {
  @Input() search: string = '';
  result?: Observable<Book[]>;
  constructor(private bookService: BookService) {}
  lockInput() {
    this.result = this.bookService
      .searchBookList(this.search)
      .pipe(debounceTime(300));
  }
}

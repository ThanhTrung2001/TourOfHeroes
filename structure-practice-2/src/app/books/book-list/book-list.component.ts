import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Book } from 'src/app/core/models/book';
import { LogService } from 'src/app/shared/services/log.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BooksService],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(
    private booksService: BooksService,
    private logService: LogService
  ) {}
  ngOnInit(): void {
    this.getBookList();
  }

  getBookList(): void {
    this.booksService
      .getBooks()
      .pipe()
      .subscribe((data) => (this.books = data));
    this.logService.logAnything();
  }
}

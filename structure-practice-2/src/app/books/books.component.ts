import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BooksService } from './service/books.service';
import { Observable, concatAll, interval, map, take } from 'rxjs';
import { Book } from '../core/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [BooksService],
})
export class BooksComponent implements OnInit {
  data?: Observable<Book[]>;
  constructor(private bookService: BooksService) {}
  ngOnInit(): void {}

  concatAllHandle() {
    const observable = interval(1000);
    observable.pipe(
      map((value) => this.bookService.getBooks()),
      concatAll()
    );
    console.log(this.data);
  }
}

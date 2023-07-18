import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book/book.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss'],
})
export class SmartComponent implements OnInit {
  books?: Book[];
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.bookService.getBookList().subscribe((data) => (this.books = data));
  }
  remove(book: Book) {
    this.books = this.books?.filter((item) => item != book);
  }
}

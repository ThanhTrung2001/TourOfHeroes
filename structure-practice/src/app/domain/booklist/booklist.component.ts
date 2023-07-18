import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.bookService.getBookList().subscribe((data) => (this.books = data));
  }
}

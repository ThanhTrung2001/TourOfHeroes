import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books/service/books.service';
import { Book } from 'src/app/core/models/book';

@Component({
  selector: 'app-smart-component',
  templateUrl: './smart-component.component.html',
  styleUrls: ['./smart-component.component.scss'],
  providers: [BooksService],
})
export class SmartComponentComponent implements OnInit {
  books: Book[] = [];
  constructor(private booksService: BooksService) {}
  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data) => (this.books = data));
  }

  remove(book: Book) {
    this.books = this.books?.filter((item) => item != book);
    console.log(`Remove book with id:${book.id}`);
  }
}

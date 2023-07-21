import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/core/models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  providers: [BooksService],
})
export class BookDetailComponent implements OnInit {
  book?: Book;
  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}
  ngOnInit(): void {
    this.getBookDetail();
  }

  getBookDetail() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.booksService.getBook(id).subscribe((data) => (this.book = data));
  }
}

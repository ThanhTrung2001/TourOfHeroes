import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book/book.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss'],
})
export class BookdetailComponent implements OnInit {
  book?: Book;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getBookDetail();
  }

  getBookDetail() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookDetail(id).subscribe((bookDetail) => {
      this.book = bookDetail;
      console.log(this.book);
    });
  }
}

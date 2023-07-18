import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
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
  isShowing: boolean = false;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    console.time('BookDetail Done');
    console.log('BookDetail done');
    console.timeEnd('BookDetail Done');
    this.getBookDetail();
  }

  getBookDetail() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookDetail(id).subscribe((bookDetail) => {
      this.book = bookDetail;
      console.log(this.book);
    });
  }

  toggle() {
    this.isShowing = !this.isShowing;
  }
}

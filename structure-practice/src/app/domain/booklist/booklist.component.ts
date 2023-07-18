import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit {
  books: Book[] = [];
  @ViewChild('container', { read: ViewContainerRef })
  containerRef?: ViewContainerRef;
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    console.time('BookList Done');
    console.log('BookList done');
    console.timeEnd('BookList Done');
    this.bookService.getBookList().subscribe((data) => (this.books = data));
  }
  loadComponent() {
    import('src/app/shared/share-b/share-b.component').then(
      ({ ShareBComponent }) => {
        this.containerRef?.createComponent(ShareBComponent);
      }
    );
  }
}

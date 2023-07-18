import { Injectable, Input } from '@angular/core';
import { Observable, catchError, filter, map, of } from 'rxjs';
import { MOCK } from 'src/app/mocks/mock-books';
import { Book } from 'src/app/models/book';

@Injectable()
export class BookService {
  books: Book[] = MOCK;
  //
  constructor() {}
  //
  getBookList(): Observable<Book[]> {
    const bookList = of(this.books);
    return bookList;
  }

  searchBookList(searchQuery: string): Observable<Book[]> {
    if (!searchQuery.trim()) {
      return of([]);
    }
    return of(this.books).pipe(
      map((books: Book[]) =>
        books.filter((book: Book) =>
          book.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    );
  }

  getBookDetail(id: number): Observable<Book | undefined> {
    const book = this.books.find((item) => item.id === id);
    return of(book);
  }

  removeBook(book: Book) {}
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from 'src/app/core/models/book';

@Injectable()
export class BooksService {
  //API url
  private url = 'api/books';
  //Http Option
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getBook(id: number): Observable<Book> {
    const detailUrl = `${this.url}/${id}`;
    return this.http
      .get<Book>(detailUrl)
      .pipe(tap((_) => console.log(`fetched Book by id=${id}`)));
  }
}

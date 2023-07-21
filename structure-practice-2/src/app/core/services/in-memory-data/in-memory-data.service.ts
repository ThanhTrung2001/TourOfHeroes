import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MOCKBOOKS } from '../../mocks/mock-booklist';
import { Book } from '../../models/book';
@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const books = MOCKBOOKS;
    return { books };
  }
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 6;
  }
}

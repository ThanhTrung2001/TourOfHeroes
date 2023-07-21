import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookDetailModule } from './book-detail/book-detail.module';
import { BookDetailRoutingModule } from './book-detail/book-detail-routing.module';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksService } from './service/books.service';

@NgModule({
  declarations: [BookListComponent, BooksComponent],
  imports: [CommonModule, RouterModule],
  exports: [BooksComponent],
})
export class BooksModule {}

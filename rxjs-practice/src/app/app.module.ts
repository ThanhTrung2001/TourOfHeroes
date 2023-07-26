import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './features/book/book.component';
import { BookDetailComponent } from './features/book/book-detail/book-detail.component';
import { BookListComponent } from './features/book/book-list/book-list.component';
import { BookModule } from './features/book/book.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BookModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

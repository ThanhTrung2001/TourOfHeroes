import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BooksModule } from './books/books.module';
import { BookDetailModule } from './books/book-detail/book-detail.module';
import { ServiceModule } from './shared/services/service.module';
import { SmartComponentComponent } from './components/smart-component/smart-component.component';
import { PresentationComponentComponent } from './components/presentation-component/presentation-component.component';
import { SharedModule } from './shared/shared.module';
import { WidgetModule } from './shared/components/book-widget/widget.module';
import { BookWidgetComponent } from './shared/components/book-widget/book-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponentComponent,
    PresentationComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BooksModule,
    ServiceModule,
    WidgetModule,
    SharedModule,
    BookDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

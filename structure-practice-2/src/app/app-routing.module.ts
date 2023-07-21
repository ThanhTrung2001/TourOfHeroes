import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { SmartComponentComponent } from './components/smart-component/smart-component.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      { path: '', redirectTo: 'booklist', pathMatch: 'full' },
      {
        path: 'booklist',
        component: BookListComponent,
      },
      {
        path: 'detail/:id',
        // component: BookDetailComponent,
        loadChildren: () =>
          import('./books/book-detail/book-detail-routing.module').then(
            (item) => item.BookDetailRoutingModule
          ),
      },
    ],
  },
  {
    path: 'smart',
    component: SmartComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

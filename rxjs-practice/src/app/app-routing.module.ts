import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './features/book/book.component';
import { BookListComponent } from './features/book/book-list/book-list.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'book',
    component: BookComponent,
    children: [
      { path: '', component: BookListComponent },
      {
        path: 'detail/:id',
        loadChildren: () =>
          import('./features/book/book-detail/book-detail-routing.module').then(
            (routeItem) => routeItem.BookDetailRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

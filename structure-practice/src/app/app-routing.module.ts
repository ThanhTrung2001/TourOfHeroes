import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './domain/booklist/booklist.component';
import { BookdetailComponent } from './domain/bookdetail/bookdetail.component';
import { SmartComponent } from './components/smart/smart.component';

const routes: Routes = [
  { path: '', component: SmartComponent },
  {
    path: 'booklist',
    loadChildren: () =>
      import('./domain/booklist/booklist-routing.module').then(
        (item) => item.BookListRoutingModule
      ),
  },
  {
    path: 'bookdetail/:id',
    loadChildren: () =>
      import('./domain/bookdetail/bookdetail-routing.module').then(
        (item) => item.BookDetailRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { SmartComponentComponent } from './components/smart-component/smart-component.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CreationComponent } from './rxjs/creation/creation.component';
import { ConditionalComponent } from './rxjs/conditional/conditional.component';
import { ErrorHandlingComponent } from './rxjs/error-handling/error-handling.component';
import { FilteringComponent } from './rxjs/filtering/filtering.component';
import { JoinComponent } from './rxjs/join/join.component';
import { JoinCreationComponent } from './rxjs/join-creation/join-creation.component';
import { MathematicalComponent } from './rxjs/mathematical/mathematical.component';
import { MultiCastingComponent } from './rxjs/multi-casting/multi-casting.component';
import { TransformationComponent } from './rxjs/transformation/transformation.component';
import { UtilityComponent } from './rxjs/utility/utility.component';
import { HighOrderComponent } from './rxjs/high-order/high-order.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent,
  },
  {
    path: 'book',
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
  {
    path: 'rxjs',
    component: RxjsComponent,
    children: [
      { path: '', component: CreationComponent },
      { path: 'creation', component: CreationComponent },
      { path: 'conditional', component: ConditionalComponent },
      { path: 'errorhandling', component: ErrorHandlingComponent },
      { path: 'filter', component: FilteringComponent },
      { path: 'join', component: JoinComponent },
      { path: 'joincreation', component: JoinCreationComponent },
      { path: 'mathematical', component: MathematicalComponent },
      { path: 'multicast', component: MultiCastingComponent },
      { path: 'transformation', component: TransformationComponent },
      { path: 'utility', component: UtilityComponent },
      { path: 'highorder', component: HighOrderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

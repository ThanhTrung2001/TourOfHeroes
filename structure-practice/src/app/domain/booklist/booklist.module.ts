import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BookListRoutingModule } from './booklist-routing.module';
import { WidgetModule } from 'src/app/shared/widget.module';

@NgModule({
  declarations: [BooklistComponent],
  imports: [CommonModule, BookListRoutingModule, WidgetModule],
  providers: [],
  exports: [BooklistComponent],
})
export class BooklistModule {}

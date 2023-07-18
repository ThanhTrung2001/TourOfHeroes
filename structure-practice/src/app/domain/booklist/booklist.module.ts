import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BookListRoutingModule } from './booklist-routing.module';
import { WidgetModule } from 'src/app/shared/widget.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShareAComponent } from 'src/app/shared/share-a/share-a.component';
import { ShareAModule } from 'src/app/shared/share-a/share-a.module';

@NgModule({
  declarations: [BooklistComponent],
  providers: [],
  exports: [BooklistComponent],
  imports: [CommonModule, BookListRoutingModule, WidgetModule, SharedModule],
})
export class BooklistModule {}

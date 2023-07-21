import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './book-detail.component';
import { BookDetailRoutingModule } from './book-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShareBModule } from 'src/app/shared/components/share-b/share-b.module';

@NgModule({
  declarations: [BookDetailComponent],
  imports: [CommonModule, BookDetailRoutingModule, SharedModule],
  exports: [BookDetailComponent],
})
export class BookDetailModule {}

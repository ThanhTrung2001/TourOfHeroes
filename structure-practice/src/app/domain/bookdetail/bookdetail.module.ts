import { Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookdetailComponent } from './bookdetail.component';
import { BookDetailRoutingModule } from './bookdetail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShareBModule } from 'src/app/shared/share-b/share-b.module';

@NgModule({
  declarations: [BookdetailComponent],
  imports: [CommonModule, BookDetailRoutingModule, SharedModule],
  providers: [],
  exports: [BookdetailComponent],
})
export class BookdetailModule {}

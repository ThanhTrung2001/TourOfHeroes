import { Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookdetailComponent } from './bookdetail.component';
import { BookDetailRoutingModule } from './bookdetail-routing.module';

@NgModule({
  declarations: [BookdetailComponent],
  imports: [CommonModule, BookDetailRoutingModule],
  providers: [],
  exports: [BookdetailComponent],
})
export class BookdetailModule {}

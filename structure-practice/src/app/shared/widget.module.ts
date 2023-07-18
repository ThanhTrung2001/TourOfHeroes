import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookwidgetComponent } from './bookwidget/bookwidget.component';
import { FormsModule } from '@angular/forms';
import { BookService } from '../service/book/book.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [BookwidgetComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
  providers: [BookService],
  exports: [BookwidgetComponent],
})
export class WidgetModule {}

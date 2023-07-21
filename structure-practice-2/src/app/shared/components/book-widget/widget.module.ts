import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookWidgetComponent } from './book-widget.component';

@NgModule({
  declarations: [BookWidgetComponent],
  imports: [CommonModule],
  exports: [BookWidgetComponent],
})
export class WidgetModule {}

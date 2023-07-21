import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookWidgetComponent } from './components/book-widget/book-widget.component';
import { ShareAComponent } from './components/share-a/share-a.component';
import { ShareBComponent } from './components/share-b/share-b.component';

@NgModule({
  declarations: [ShareAComponent, ShareBComponent],
  imports: [CommonModule],
  exports: [ShareAComponent, ShareBComponent],
  // declarations: [],
  // imports: [CommonModule],
  // exports: [],
})
export class SharedModule {}

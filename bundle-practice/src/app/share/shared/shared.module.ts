import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareAComponent } from '../share-a/share-a.component';
import { ShareBComponent } from '../share-b/share-b.component';

@NgModule({
  declarations: [ShareAComponent, ShareBComponent],
  imports: [CommonModule],
  exports: [ShareAComponent, ShareBComponent],
})
export class SharedModule {}

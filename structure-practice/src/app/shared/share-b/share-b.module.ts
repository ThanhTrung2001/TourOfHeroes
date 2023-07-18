import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareBComponent } from './share-b.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
})
export class ShareBModule implements OnInit {
  ngOnInit(): void {
    console.log('ShareB Module Create!');
  }
}

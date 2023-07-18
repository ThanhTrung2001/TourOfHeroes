import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareAComponent } from './share-a.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
})
export class ShareAModule implements OnInit {
  ngOnInit(): void {
    console.log('ShareA Module Create!');
  }
}

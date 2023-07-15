import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent {
  defaultText: string = '';
  @ViewChild('myInput') inputRef?: ElementRef;

  changeText() {
    console.log('Log ViewChild');
  }

  runLikeChild() {
    console.log('Log ViewChild like child');
  }
}

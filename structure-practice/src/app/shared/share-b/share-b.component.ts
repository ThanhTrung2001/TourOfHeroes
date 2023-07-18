import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-share-b',
  templateUrl: './share-b.component.html',
  styleUrls: ['./share-b.component.scss'],
})
export class ShareBComponent implements OnInit {
  ngOnInit(): void {
    console.time('ShareBComponent');
    console.log('ShareBComponent loaded and displayed');
    console.timeEnd('ShareBComponent');
  }
}

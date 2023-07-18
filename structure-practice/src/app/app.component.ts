import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'structure-practice';
  ngOnInit(): void {
    console.time('AppComponent Done');
    console.log('AppComponent done');
    console.timeEnd('AppComponent Done');
  }
}

import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class LogService implements OnInit {
  constructor() {}
  ngOnInit(): void {
    console.log('Log service create!');
  }
  logAnything() {
    console.log('Log service has been provide!');
  }
}

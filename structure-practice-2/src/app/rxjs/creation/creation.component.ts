import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, from, fromEvent, interval, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss'],
})
export class CreationComponent implements OnInit {
  data?: any;
  @ViewChild('clickEvent', { static: true }) buttonRef?: ElementRef;
  ngOnInit(): void {
    // this.ajaxFetchAPI();
    // this.fromCreation();
    // this.ofCreation();
    // this.intervalCreation();
    this.fromEventCreation();
  }

  ajaxFetchAPI() {
    const result = ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1');
    result.pipe(map((userResponse) => console.log('users: ', userResponse)));
    console.log(result);
    result.subscribe((x) => {
      this.data = x;
      console.log(`userData : ${this.data.userId}`);
      console.log('-----------------------------');
    });
  }

  fromCreation() {
    const inputObject = [1, 2, 3];
    from(inputObject).subscribe((x) => {
      console.log(x);
      console.log('-');
    });
  }

  ofCreation() {
    of(1, 2, 3).subscribe((x) => {
      console.log(x);
      console.log('--');
    });
  }

  intervalCreation() {
    interval(3000)
      .pipe(filter((x) => x < 8))
      .subscribe((x) => console.log(x));
  }

  fromEventCreation() {
    const buttonClick$ = fromEvent(this.buttonRef?.nativeElement, 'click');
    buttonClick$.subscribe(() => {
      console.log('Button clicked!');
    });
  }
}

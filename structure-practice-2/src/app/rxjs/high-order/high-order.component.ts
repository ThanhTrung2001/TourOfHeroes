import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Observable,
  concatAll,
  concatMap,
  concatMapTo,
  exhaustAll,
  exhaustMap,
  filter,
  fromEvent,
  interval,
  map,
  mergeAll,
  mergeMap,
  of,
  switchAll,
  switchMap,
  take,
  toArray,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

const observer = {
  next: (data: any) => console.log('Value: ' + data),
  error: (err: any) => console.error('Error: ' + err),
  complete: () => console.log('Complete notification'),
};

@Component({
  selector: 'app-high-order',
  templateUrl: './high-order.component.html',
  styleUrls: ['./high-order.component.scss'],
})
export class HighOrderComponent implements OnInit {
  @ViewChild('clickEvent', { static: true }) buttonRef?: ElementRef;
  data: number[] = [];
  value = 1;
  value1 = 2;
  ngOnInit(): void {
    // this.concatAllHandle();
    // this.concatMapHandle();
    // this.concatMapToHandle();
    // this.switchMapHandle();
    this.mergeMapHandle();
    // this.exhaustMapHandle();
    // this.concatMapHandle2();
    // this.switchMapHandle2();
    // this.mergeMapHandle2();
    // this.clickExhaust();
    // this.clickConcat();
    // this.clickMerge();
    // this.clickSwitch();
    // this.clickExhaust();
  }

  concatAllHandle() {
    of(1, 2, 3, 4)
      .pipe(
        map((value) => {
          console.log(value);
          return ajax(`https://jsonplaceholder.typicode.com/todos/${value}`);
        }),
        concatAll()
      )
      .subscribe((data) => console.log(data.response));
  }

  concatMapHandle() {
    of(1, 2, 3, 4)
      .pipe(
        concatMap((value) => {
          console.log(value);
          return ajax(
            `https://jsonplaceholder.typicode.com/todos/${value}`
          ).pipe(map((data) => data.response));
        })
      )
      .subscribe((data) => console.log(data));
  }

  concatMapToHandle() {
    of(1, 2, 3, 4)
      .pipe(
        concatMapTo(
          ajax(`https://jsonplaceholder.typicode.com/todos/1`).pipe(
            map((data) => data.response)
          )
        )
      )
      .subscribe((data) => console.log(data));
  }

  switchMapHandle() {
    of(1, 2, 3, 4)
      .pipe(
        switchMap((value) => {
          console.log(value);
          return ajax(
            `https://jsonplaceholder.typicode.com/todos/${value}`
          ).pipe(map((data) => console.log(data.response)));
        })
      )
      .subscribe((data) => console.log(data));
  }

  mergeMapHandle() {
    of(1, 2, 3, 4)
      .pipe(
        mergeMap((value) => {
          console.log(value);
          return ajax(
            `https://jsonplaceholder.typicode.com/todos/${value}`
          ).pipe(map((data) => data.response));
        })
      )
      .subscribe((data) => {
        console.log('----');
        console.log(data);
      });
  }

  exhaustMapHandle() {
    interval(1000)
      .pipe(
        filter((value) => value > 0),
        exhaustMap((value) => {
          return ajax(`https://jsonplaceholder.typicode.com/todos/${value}`);
        })
      )
      .subscribe((data) => {
        console.log(data.response);
      });
  }

  concatMapHandle2() {
    of(1, 2, 3, 4)
      .pipe(
        concatMap((value) =>
          interval(1000).pipe(
            map((i) => value),
            take(1)
          )
        ),
        take(4)
      )
      .subscribe((data) => this.data.push(data));
  }

  switchMapHandle2() {
    of(1, 2, 3, 4)
      .pipe(
        switchMap((value) =>
          interval(1000).pipe(
            map((i) => value),
            take(1)
          )
        ),
        take(4)
      )
      .subscribe((data) => this.data.push(data));
  }

  mergeMapHandle2() {
    of(1, 2, 3, 4)
      .pipe(
        mergeMap((value) =>
          interval(1000).pipe(
            map((i) => value),
            take(1)
          )
        )
      )
      .subscribe((data) => {
        this.data.push(data);
      });
  }

  clickExhaust() {
    const observable = fromEvent(this.buttonRef?.nativeElement, 'click');
    observable
      .pipe(exhaustMap(() => interval(1000).pipe(take(4))))
      .subscribe((data) => this.data.push(data));
  }

  clickConcat() {
    const observable = fromEvent(this.buttonRef?.nativeElement, 'click');
    observable
      .pipe(concatMap(() => interval(1000).pipe(take(4))))
      .subscribe((data) => this.data.push(data));
  }

  clickMerge() {
    const observable = fromEvent(this.buttonRef?.nativeElement, 'click');
    observable
      .pipe(mergeMap(() => interval(1000).pipe(take(4))))
      .subscribe((data) => this.data.push(data));
  }

  clickSwitch() {
    const observable = fromEvent(this.buttonRef?.nativeElement, 'click');
    observable
      .pipe(switchMap(() => interval(1000).pipe(take(4))))
      .subscribe((data) => this.data.push(data));
  }

  logging() {}
}

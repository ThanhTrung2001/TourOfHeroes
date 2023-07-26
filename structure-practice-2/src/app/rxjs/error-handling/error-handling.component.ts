import { Component, OnInit } from '@angular/core';
import {
  catchError,
  delay,
  delayWhen,
  map,
  of,
  retry,
  retryWhen,
  tap,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.scss'],
})
export class ErrorHandlingComponent implements OnInit {
  ngOnInit(): void {
    // this.catchErrorHandle();
    // this.retryErrorHandle();
    this.retryWhenErrorHandle();
  }

  catchErrorHandle() {
    of(1, 2, 3, 4, 5)
      .pipe(
        map((n) => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        catchError((err, caught) => {
          console.error('Error occurred:', err);
          return of('error');
        })
        // catchError((err) => of('I', 'II', 'III', 'IV', 'V'))
      )
      .subscribe((x) => console.log(x));
  }

  retryErrorHandle() {
    of(1, 2, 3, 4, 5)
      .pipe(
        map((n) => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        retry(2)
        // catchError((err) => of('I', 'II', 'III', 'IV', 'V'))
      )
      .subscribe((x) => console.log(x));
  }

  retryWhenErrorHandle() {
    of(1, 2, 3, 4, 5)
      .pipe(
        map((n) => {
          if (n == 4) {
            throw 'four!';
          }
          return n;
        }),
        delay(10000)
      )
      .subscribe((x) => console.log(x));
  }
}

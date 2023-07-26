import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, of } from 'rxjs';

const observer1 = {
  next: (data: any) => console.log('1.Value: ' + data),
  error: (err: any) => console.error('1.Error: ' + err),
  complete: () => console.log('1.Complete notification'),
};

const observer2 = {
  next: (data: any) => console.log('2.Value: ' + data),
  error: (err: any) => console.error('2.Error: ' + err),
  complete: () => console.log('2.Complete notification'),
};

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.ObservableMultiCastTesting();
    // this.subjectMultiCast();
    // this.behaviorHandle();
    this.replayHandle();
  }

  ObservableMultiCastTesting() {
    console.log('Observable multi cast?');
    let observable$ = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    let observer1 = {
      next: (data: number) => {
        console.log(`observer1 : ${data}`);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log(`observer1 complete`);
      },
    };

    let observer2 = {
      next: (data: number) => {
        console.log(`observer2 : ${data}`);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log(`observer2 complete`);
      },
    };
    //when multi observer subcribe -> like a queue that first in first out
    observable$.subscribe(observer1);
    //-> when complete send data to ob1 -> send data to ob2  -> Observable excute 2 time
    observable$.subscribe(observer2);
    console.log('------------------------------------------');
    // observable2$.subscribe((x) => console.log(x));
  }

  subjectMultiCast() {
    console.log('Subject multi cast?');
    let observable2$ = of(1, 2, 3);

    const subject = new Subject<number>();

    let observer1 = {
      next: (data: number) => {
        console.log(`observer1 : ${data}`);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log(`observer1 complete`);
      },
    };

    let observer2 = {
      next: (data: number) => {
        console.log(`observer2 : ${data}`);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log(`observer2 complete`);
      },
    };

    subject.subscribe(observer1);
    subject.subscribe(observer2);
    observable2$.subscribe(subject);
    subject.next(1);
    subject.next(2);

    subject.complete();
    // execute 2 observer1 & observer2 paralel -> 1 time run observable/subject execution
    console.log('------------------------------------------');
  }

  behaviorHandle() {
    let subject$ = new BehaviorSubject(0);
    subject$.subscribe(observer1);
    subject$.next(1);
    subject$.next(2);
    subject$.next(3);
    subject$.subscribe(observer2);
    setTimeout(() => subject$.subscribe(observer2), 1000);
    subject$.next(4);
  }

  replayHandle() {
    let subject$ = new ReplaySubject(2);
    subject$.subscribe(observer1);
    subject$.next(1);
    subject$.next(2);
    subject$.next(3);
    subject$.subscribe(observer2);
    // setTimeout(() => subject$.subscribe(observer2), 1000);
    subject$.next(4);
  }

  asyncHandle() {}

  voidHandle() {}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  //ensure privacy and control access to BehaviorSubject -> use private BehaviorSubject and create an Observable base oin that Behavior
  messageSource = new BehaviorSubject<string>('empty message!');
  //mesageObservable = this.mesageSource.asObservable();
  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  constructor() {
    console.log('Create Message Service InStance');
  }
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

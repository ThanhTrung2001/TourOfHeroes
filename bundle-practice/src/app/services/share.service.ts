import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  mock = [1, 2, 3];
  constructor() {}
  getArray() {
    return this.mock;
  }
}

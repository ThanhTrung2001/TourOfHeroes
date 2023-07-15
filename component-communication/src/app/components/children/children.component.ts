import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnChanges {
  //Receive Data from Parent
  @Input() message?: string;
  //Setter
  private _messageFromParent: string = '';
  //
  @Input()
  set messageFromParent(value: string) {
    // Logic code that handle the value
    // console.log('Change empty to:', value);
    this._messageFromParent = value;
  }
  get messageFromParent(): string {
    return this._messageFromParent;
  }
  //Send data to parents
  @Output() dataEvent = new EventEmitter<string>();
  //Example 3 with ngOnChange
  @Input() count: number = 0;
  //LocalVariables
  logChild: string = 'Default - not lock';

  constructor(private data: DataService) {}

  //ngOnChange for example 3
  ngOnChanges(changes: SimpleChanges): void {
    if (changes[this.count]) {
      console.log('count + 1 = ${this.count}');
    }
  }
  sendDataToParent() {
    this.dataEvent.emit('Receive Data from Parent');
    console.log('send data from child');
  }

  sendMessage() {
    this.data.changeMessage('Children send data for Parents');
  }

  logAnything() {
    this.logChild = 'Log from Parent Call';
  }
}

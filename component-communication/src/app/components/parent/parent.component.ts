import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, AfterViewInit {
  //Transfer data to children
  parentTransferData: string = 'Parent Data Transfer by @Input Complete!';
  //Receive Data from Children
  childDataReceive: string = '';
  //Service transfer
  message: string = '';
  //setter
  messageToSetter: string = 'Parent Transfer to Child use Setter';
  //ngOnChange in Child
  count: number = 0;
  //ViewChild - practice 5
  @ViewChild('viewchild') viewChild?: ViewChildComponent;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    //subcribe to listen the stream of Observable - BehaviorSubject
    this.data.messageSource.subscribe((message) => (this.message = message));
  }

  ngAfterViewInit(): void {
    this.viewChild?.changeText();
  }

  printViewChildLog() {
    this.viewChild?.runLikeChild();
  }

  receiveData(data: string) {
    this.childDataReceive = data;
    console.log('data receive!');
  }
}

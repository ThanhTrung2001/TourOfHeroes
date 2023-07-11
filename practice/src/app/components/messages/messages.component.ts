import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/mesage/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  providers: [],
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
  //When bind a service to a template -> public instance, not private instance
}

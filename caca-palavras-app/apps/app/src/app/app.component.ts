import { Component } from '@angular/core';
import { io, Socket} from 'socket.io-client';

@Component({
  selector: 'cp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'app';
  socket: Socket;
  constructor() {
    this.socket = io('localhost:3333');
    this.socket.on('command', (data: string) => {
      console.log(data);
    });
  }
}

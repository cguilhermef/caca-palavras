import { Injectable } from '@angular/core';
import { io, Socket } from "socket.io-client";
import { Subject } from "rxjs";
import { Command, CommandType, RawCommand, StartCommand, TypeCommand } from "@caca-palavras-app/shared/util-interfaces";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  commands$ = new Subject<Command>();
  constructor() {
    const socket = io('localhost:3333');
    socket.on('command', (command) => {
      console.log('socket.on', command);
      this.extractCommandFrom(command);
    });
  }

  private extractCommandFrom(rawCommand: RawCommand) {
    console.log('raw command', rawCommand);
    const { player, payload} = rawCommand;
    const [type, value] = payload.split(':');

    switch (type) {
      case 'start': {
        this.commands$.next({
          type: CommandType.Start,
          player,
          team: Number(value)
        } as StartCommand);
        return;
      }
      case 'type': {
        this.commands$.next({
          type: CommandType.Type,
          player,
          character: String(value)
        } as TypeCommand);
        return;
      }
      case 'finish': {
        this.commands$.next({
          type: CommandType.Finish,
          player,
        } as Command)
        return;
      }
      case 'erase': {
        this.commands$.next({
          type: CommandType.Erase,
          player,
        } as Command)
        return;
      }
      case 'reset': {
        this.commands$.next({
          type: CommandType.Reset,
          player,
        } as Command)
      }
    }
  }
}

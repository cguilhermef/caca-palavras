import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  GameActions,
  GameSelectors,
} from '@caca-palavras-app/game/data-access';
import { map, takeWhile, tap, timer } from 'rxjs';
import { RawCommand } from '@caca-palavras-app/shared/util-interfaces';
import { io } from 'socket.io-client';

import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import { Duration } from 'dayjs/plugin/duration';

dayjs.extend(duration);

@Component({
  selector: 'cp-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class GameComponent implements OnDestroy {
  private componentActive = true;

  private gameTime: Duration = dayjs.duration(1, 'hour');
  private gameFinished = false;
  private gameStarted = false;
  countdown$ = timer(1000, 1000).pipe(
    takeWhile(() => !this.gameFinished),
    tap(() => (this.gameTime = this.gameTime.subtract(1, 'second'))),
    map(() => {
      if (this.gameTime.asMilliseconds() === 0) {
        this.gameFinished = true;
      }
      return this.gameTime.format('HH:mm:ss').split(':');
    })
  );

  playerOneWord$ = this.store.pipe(
    select(GameSelectors.playerOneWord),
    map((characters) => characters.padEnd(10, ' ').split(''))
  );
  playerTwoWord$ = this.store.pipe(
    select(GameSelectors.playerTwoWord),
    map((characters) => characters.padEnd(10, ' ').split(''))
  );

  playerOneTeam$ = this.store.select(GameSelectors.playerOneTeam);
  playerTwoTeam$ = this.store.select(GameSelectors.playerTwoTeam);

  ranking$ = this.store.select(GameSelectors.ranking);
  totalPoint$ = this.store.select(GameSelectors.totalPoints);

  constructor(private store: Store) {
    const socket = io('localhost:3333');
    socket.on('command', (command) => {
      console.log('socket.on', command);
      this.dispatchActionFrom(command);
    });

    // setInterval(
    //   () => {
    //     this.timer$.next(this.timer$.value.subtract(1, 'second'))
    //   },
    //   1000
    // );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  private dispatchActionFrom(rawCommand: RawCommand) {
    console.log('raw command', rawCommand);
    const { player, payload } = rawCommand;
    const [type, value] = payload.split(':');

    switch (type) {
      case 'start': {
        this.store.dispatch(
          GameActions.startTyping({
            teamId: Number(value),
            player,
          })
        );
        break;
      }
      case 'finish': {
        this.store.dispatch(
          GameActions.finishTyping({
            teamId: Number(value),
            player,
          })
        );
        break;
      }
      case 'type': {
        this.store.dispatch(
          GameActions.typeCharacter({
            character: String(value),
            player,
          })
        );
        break;
      }
      case 'erase': {
        this.store.dispatch(
          GameActions.eraseLastCharacter({
            player,
          })
        );
        break;
      }
      case 'reset': {
        this.store.dispatch(
          GameActions.resetTyping({
            player,
          })
        );
        break;
      }
    }
  }
}

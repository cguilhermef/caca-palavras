import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Duration } from 'dayjs/plugin/duration';
import * as dayjs from 'dayjs';
import { filter, map, takeWhile, tap, timer } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  GameActions,
  GameSelectors,
} from '@caca-palavras-app/game/data-access';
import { io } from 'socket.io-client';
import { RawCommand } from '@caca-palavras-app/shared/util-interfaces';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  selector: 'cp-game-alt',
  templateUrl: './game-alt.component.html',
  styleUrls: ['./game-alt.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class GameAltComponent implements OnDestroy {
  private componentActive = true;

  private gameTime: Duration = dayjs.duration(1, 'hour');
  gameFinished = false;
  private gamePaused = true;
  countdown$ = timer(1000, 1000).pipe(
    filter(() => !this.gamePaused),
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
    map((characters) => characters.padEnd(12, ' ').split(''))
  );
  playerTwoWord$ = this.store.pipe(
    select(GameSelectors.playerTwoWord),
    map((characters) => characters.padEnd(12, ' ').split(''))
  );

  playerOneTeam$ = this.store.select(GameSelectors.playerOneTeam);
  playerTwoTeam$ = this.store.select(GameSelectors.playerTwoTeam);

  ranking$ = this.store.select(GameSelectors.ranking);
  rankingLeaders$ = this.store.select(GameSelectors.rankingLeaders);
  totalPoint$ = this.store.select(GameSelectors.totalPoints);

  constructor(private store: Store, private action$: Actions) {
    const socket = io('localhost:3333');
    socket.on('command', (command) => {
      console.log('socket.on', command);
      this.dispatchActionFrom(command);
    });

    this.action$.pipe(ofType(GameActions.startGame)).subscribe(() => {
      this.gamePaused = false;
    });
    this.action$.pipe(ofType(GameActions.pauseGame)).subscribe(() => {
      this.gamePaused = true;
    });
    this.action$.pipe(ofType(GameActions.endGame)).subscribe(() => {
      this.gameFinished = true;
    });
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

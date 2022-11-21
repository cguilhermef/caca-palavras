import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  GameActions,
  GameSelectors,
  SocketService,
} from '@caca-palavras-app/game/data-access';
import { map, takeWhile } from 'rxjs';

@Component({
  selector: 'cp-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class GameComponent implements OnDestroy {
  private componentActive = true;

  playerOneWord$ = this.store.pipe(
    select(GameSelectors.playerOneWord),
    map((characters) => characters.padEnd(10, ' ').split(''))
  );
  playerTwoWord$ = this.store.pipe(
    select(GameSelectors.playerTwoWord),
    map((characters) => characters.padEnd(10, ' ').split(''))
  );

  constructor(private store: Store, private socketService: SocketService) {
    this.socketService.commands$
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((command) => {
        console.log('subscribe', command);
        this.store.dispatch(GameActions.registerCommand({ command }));
      });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGame from './+state/game.reducer';
import { GameEffects } from './+state/game.effects';
import { SocketService } from "./socket.service";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromGame.GAME_FEATURE_KEY, fromGame.gameReducer),
    EffectsModule.forFeature([GameEffects]),
  ],
  providers: [SocketService]
})
export class GameDataAccessModule {}

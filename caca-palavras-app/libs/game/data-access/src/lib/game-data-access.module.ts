import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGame from './+state/game.reducer';
import { GameEffects } from './+state/game.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromGame.GAME_FEATURE_KEY, fromGame.gameReducer),
    EffectsModule.forFeature([GameEffects]),
  ],
})
export class GameDataAccessModule {}

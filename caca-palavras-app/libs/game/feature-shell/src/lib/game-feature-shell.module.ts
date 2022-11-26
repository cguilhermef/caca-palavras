import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { RouterModule } from '@angular/router';
import { GameDataAccessModule } from '@caca-palavras-app/game/data-access';
import { GameUiModule } from '@caca-palavras-app/game/ui';
import { GameAltComponent } from './game-alt';

@NgModule({
  imports: [
    CommonModule,
    GameDataAccessModule,
    GameUiModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: GameAltComponent,
      },
    ]),
  ],
  declarations: [GameComponent, GameAltComponent],
})
export class GameFeatureShellModule {}

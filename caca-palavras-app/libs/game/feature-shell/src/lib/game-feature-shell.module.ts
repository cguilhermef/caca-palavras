import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { RouterModule } from '@angular/router';
import { GameDataAccessModule } from '@caca-palavras-app/game/data-access';
import { GameUiModule } from '@caca-palavras-app/game/ui';

@NgModule({
  imports: [
    CommonModule,
    GameDataAccessModule,
    GameUiModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: GameComponent,
      },
    ]),
  ],
  declarations: [GameComponent],
})
export class GameFeatureShellModule {}

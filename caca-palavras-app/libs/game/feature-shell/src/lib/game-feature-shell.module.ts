import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { RouterModule } from "@angular/router";
import { GameDataAccessModule } from "@caca-palavras-app/game/data-access";

@NgModule({
  imports: [
    CommonModule,
    GameDataAccessModule,
    RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: GameComponent
    }
  ])],
  declarations: [GameComponent],
})
export class GameFeatureShellModule {}

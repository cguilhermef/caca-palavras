import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingPositionComponent } from './ranking-position';
import { ChineseSymbolComponent } from './chinese-symbol';
import { BoiComponent, CaoComponent } from './symbols';
import { TeamScoreComponent } from './team-score';

@NgModule({
  imports: [CommonModule],
  exports: [RankingPositionComponent, TeamScoreComponent],
  declarations: [
    RankingPositionComponent,
    ChineseSymbolComponent,
    BoiComponent,
    CaoComponent,
    TeamScoreComponent,
  ],
})
export class GameUiModule {}

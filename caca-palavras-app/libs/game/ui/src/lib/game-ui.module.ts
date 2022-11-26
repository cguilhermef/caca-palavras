import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingPositionComponent } from './ranking-position';
import { ChineseSymbolComponent } from './chinese-symbol';
import {
  BoiComponent,
  CaoComponent,
  CarneiroComponent,
  CavaloComponent,
  CoelhoComponent,
  DragaoComponent,
  GaloComponent,
  MacacoComponent,
  PorcoComponent,
  RatoComponent,
  SerpenteComponent,
  TigreComponent,
} from './symbols';
import { TeamScoreComponent } from './team-score';
import { EndgameComponent } from './endgame/endgame.component';

@NgModule({
  imports: [CommonModule],
  exports: [RankingPositionComponent, TeamScoreComponent, EndgameComponent],
  declarations: [
    RankingPositionComponent,
    ChineseSymbolComponent,
    BoiComponent,
    CaoComponent,
    TeamScoreComponent,
    CarneiroComponent,
    CavaloComponent,
    CoelhoComponent,
    DragaoComponent,
    GaloComponent,
    MacacoComponent,
    PorcoComponent,
    RatoComponent,
    SerpenteComponent,
    TigreComponent,
    EndgameComponent,
  ],
})
export class GameUiModule {}

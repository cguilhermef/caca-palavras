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

@NgModule({
  imports: [CommonModule],
  exports: [RankingPositionComponent, TeamScoreComponent],
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
  ],
})
export class GameUiModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingPositionComponent } from './ranking-position';
import { ChineseSymbolComponent } from './chinese-symbol';

@NgModule({
  imports: [CommonModule],
  exports: [RankingPositionComponent],
  declarations: [RankingPositionComponent, ChineseSymbolComponent],
})
export class GameUiModule {}

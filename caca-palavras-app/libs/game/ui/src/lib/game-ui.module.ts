import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingPositionComponent } from './ranking-position';
import { ChineseSymbolComponent } from './chinese-symbol';
import { BoiComponent } from './symbols';
import { CaoComponent } from './symbols/cao/cao.component';

@NgModule({
  imports: [CommonModule],
  exports: [RankingPositionComponent],
  declarations: [
    RankingPositionComponent,
    ChineseSymbolComponent,
    BoiComponent,
    CaoComponent,
  ],
})
export class GameUiModule {}

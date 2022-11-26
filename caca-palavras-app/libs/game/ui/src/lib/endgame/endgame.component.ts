import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RankedTeam } from '@caca-palavras-app/shared/util-interfaces';

@Component({
  selector: 'cp-endgame',
  templateUrl: './endgame.component.html',
  styleUrls: ['./endgame.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EndgameComponent {
  @Input() teams: RankedTeam[] = [];
}

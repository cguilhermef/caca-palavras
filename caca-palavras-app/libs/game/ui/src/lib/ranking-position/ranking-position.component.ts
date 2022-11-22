import { Component, Input } from '@angular/core';
import { Team } from '@caca-palavras-app/shared/util-interfaces';

@Component({
  selector: 'cp-ranking-position',
  templateUrl: './ranking-position.component.html',
  styleUrls: ['./ranking-position.component.scss'],
})
export class RankingPositionComponent {
  @Input() position = 1;
  @Input() team: Team = {
    image: '',
    name: '',
    points: 0,
    id: -1,
    chinese: '',
  };
}

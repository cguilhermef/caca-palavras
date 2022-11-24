import { Component, Input } from '@angular/core';
import { RankedTeam } from '@caca-palavras-app/shared/util-interfaces';

@Component({
  selector: 'cp-ranking-position',
  templateUrl: './ranking-position.component.html',
  styleUrls: ['./ranking-position.component.scss'],
})
export class RankingPositionComponent {
  @Input() totalPoints = 0;
  @Input() team: RankedTeam = {
    image: '',
    name: '',
    points: 0,
    id: -1,
    chinese: '',
    position: 1,
  };

  get scoreBarSize(): number {
    return (this.team.points / this.totalPoints) * 100;
    // return 100;
  }
}

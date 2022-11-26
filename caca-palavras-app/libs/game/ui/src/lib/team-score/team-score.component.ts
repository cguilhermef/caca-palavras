import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RankedTeam } from '@caca-palavras-app/shared/util-interfaces';

@Component({
  selector: 'cp-team-score',
  templateUrl: './team-score.component.html',
  styleUrls: ['./team-score.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TeamScoreComponent {
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

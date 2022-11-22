import { Component, HostBinding, Input } from '@angular/core';
import { Teams } from '@caca-palavras-app/shared/util-interfaces';

@Component({
  selector: 'cp-chinese-symbol',
  templateUrl: './chinese-symbol.component.html',
  styleUrls: ['./chinese-symbol.component.scss'],
})
export class ChineseSymbolComponent {
  @Input() team: Teams = Teams.Boi;

  @HostBinding('class.color-1') get team1() {
    return this.team === Teams.Boi;
  }

  @HostBinding('class.color-2') get team2() {
    return this.team === Teams.Cao;
  }

  @HostBinding('class.color-3') get team3() {
    return this.team === Teams.Carneiro;
  }

  @HostBinding('class.color-4') get team4() {
    return this.team === Teams.Cavalo;
  }

  @HostBinding('class.color-5') get team5() {
    return this.team === Teams.Coelho;
  }

  @HostBinding('class.color-6') get team6() {
    return this.team === Teams.Dragao;
  }

  @HostBinding('class.color-7') get team7() {
    return this.team === Teams.Galo;
  }

  @HostBinding('class.color-8') get team8() {
    return this.team === Teams.Macaco;
  }

  @HostBinding('class.color-9') get team9() {
    return this.team === Teams.Porco;
  }

  @HostBinding('class.color-10') get team10() {
    return this.team === Teams.Rato;
  }

  @HostBinding('class.color-11') get team11() {
    return this.team === Teams.Serpente;
  }

  @HostBinding('class.color-12') get team12() {
    return this.team === Teams.Tigre;
  }
}

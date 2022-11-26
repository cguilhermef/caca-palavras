import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-porco',
  templateUrl: './porco.component.html',
  styleUrls: ['./porco.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PorcoComponent {
  @Input() alternate = false;
}

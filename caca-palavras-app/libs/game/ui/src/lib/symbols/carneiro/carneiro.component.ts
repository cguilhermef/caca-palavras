import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-carneiro',
  templateUrl: './carneiro.component.html',
  styleUrls: ['./carneiro.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CarneiroComponent {
  @Input() alternate = false;
}

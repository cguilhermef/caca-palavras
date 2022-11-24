import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-boi',
  templateUrl: './boi.component.html',
  styleUrls: ['./boi.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class BoiComponent {
  @Input() alternate = false;
}

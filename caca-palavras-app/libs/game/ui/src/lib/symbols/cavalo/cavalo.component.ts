import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-cavalo',
  templateUrl: './cavalo.component.html',
  styleUrls: ['./cavalo.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CavaloComponent {
  @Input() alternate = false;
}

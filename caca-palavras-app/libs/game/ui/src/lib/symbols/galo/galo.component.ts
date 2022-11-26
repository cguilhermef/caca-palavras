import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-galo',
  templateUrl: './galo.component.html',
  styleUrls: ['./galo.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class GaloComponent {
  @Input() alternate = false;
}

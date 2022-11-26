import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-rato',
  templateUrl: './rato.component.html',
  styleUrls: ['./rato.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class RatoComponent {
  @Input() alternate = false;
}

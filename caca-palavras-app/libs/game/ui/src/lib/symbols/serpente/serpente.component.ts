import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-serpente',
  templateUrl: './serpente.component.html',
  styleUrls: ['./serpente.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SerpenteComponent {
  @Input() alternate = false;
}

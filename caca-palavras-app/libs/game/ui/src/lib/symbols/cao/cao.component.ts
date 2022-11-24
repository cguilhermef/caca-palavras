import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-cao',
  templateUrl: './cao.component.html',
  styleUrls: ['./cao.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CaoComponent {
  @Input() alternate = false;
}

import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-tigre',
  templateUrl: './tigre.component.html',
  styleUrls: ['./tigre.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TigreComponent {
  @Input() alternate = false;
}

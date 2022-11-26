import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-macaco',
  templateUrl: './macaco.component.html',
  styleUrls: ['./macaco.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class MacacoComponent {
  @Input() alternate = false;
}

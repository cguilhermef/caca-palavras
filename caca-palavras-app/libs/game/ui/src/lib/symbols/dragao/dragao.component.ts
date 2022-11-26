import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-dragao',
  templateUrl: './dragao.component.html',
  styleUrls: ['./dragao.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class DragaoComponent {
  @Input() alternate = false;
}

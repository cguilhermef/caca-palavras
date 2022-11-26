import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-coelho',
  templateUrl: './coelho.component.html',
  styleUrls: ['./coelho.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CoelhoComponent {
  @Input() alternate = false;
}

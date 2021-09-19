import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'nested-nested-subscribe',
  templateUrl: './nested-subscribe.component.html',
  styleUrls: ['./nested-subscribe.component.scss'],
})
export class NestedSubscribeComponent {
  pokemon: Pokemon[] = [];
}

import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/models';

@Component({
  selector: 'nested-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {
  @Input() pokemon: Pokemon[] = [];
}

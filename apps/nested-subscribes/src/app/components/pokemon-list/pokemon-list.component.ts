import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'nested-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  @Input() pokemon: Pokemon[] = [];

  columns = ['id', 'name', 'height', 'weight'];
}

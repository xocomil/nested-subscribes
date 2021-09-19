import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'nested-nested-subscribe',
  templateUrl: './nested-subscribe.component.html',
  styleUrls: ['./nested-subscribe.component.scss'],
})
export class NestedSubscribeComponent {
  pokemon: Pokemon[] = [];
  isLoading = false;

  constructor(private readonly _pokemonService: PokemonService) {}

  getData(): void {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    const resultPokemon: Pokemon[] = [];

    this._pokemonService.getPokemon().subscribe((response) => {
      response.results.forEach((result) => {
        console.log(result);
        this._pokemonService
          .getPokemonDetails(result.name)
          .subscribe((result) => {
            resultPokemon.push(result);
            console.log(result);
          });
      });
    });

    setTimeout(() => {
      this.pokemon = resultPokemon;
      this.isLoading = false;
    }, 5000);
  }
}

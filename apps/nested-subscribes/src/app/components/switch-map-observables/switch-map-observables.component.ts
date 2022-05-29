import { Component } from '@angular/core';
import { concat } from 'rxjs';
import { finalize, switchMap, zipAll } from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'nested-switch-map-observables',
  templateUrl: './switch-map-observables.component.html',
  styleUrls: ['./switch-map-observables.component.scss'],
})
export class SwitchMapObservablesComponent {
  pokemon: Pokemon[] = [];
  isLoading = false;

  constructor(private readonly _pokemonService: PokemonService) {}

  getData(): void {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    this._pokemonService
      .getPokemon()
      .pipe(
        switchMap((response) => {
          const requests = response.results.map((result) => this._pokemonService.getPokemonDetails(result.name));

          return concat(requests).pipe(
            zipAll(),
            finalize(() => {
              this.isLoading = false;
            })
          );
        })
      )
      .subscribe((resultPokemon) => {
        this.pokemon = resultPokemon;
      });
  }
}

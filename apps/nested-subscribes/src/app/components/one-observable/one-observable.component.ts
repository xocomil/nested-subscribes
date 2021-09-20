import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  concatMap,
  finalize,
  map,
  mergeMap,
  switchMap,
  toArray,
} from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'nested-one-observable',
  templateUrl: './one-observable.component.html',
  styleUrls: ['./one-observable.component.scss'],
})
export class OneObservableComponent {
  pokemon: Pokemon[] = [];
  isLoading = false;

  constructor(private readonly _pokemonService: PokemonService) {}

  useSwitchMap(): void {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    const withSwitchMap$ = this._pokemonService.getPokemon().pipe(
      map((response) => response.results),
      mergeMap((result) => result),
      switchMap((result) => this._pokemonService.getPokemonDetails(result.name))
    );

    this.getData(withSwitchMap$);
  }

  useConcatMap(): void {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    const withConcatMap$ = this._pokemonService.getPokemon().pipe(
      map((response) => response.results),
      mergeMap((result) => result),
      concatMap((result) => this._pokemonService.getPokemonDetails(result.name))
    );

    this.getData(withConcatMap$);
  }

  private getData(pokemon$: Observable<Pokemon>): void {
    pokemon$
      .pipe(
        toArray(),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((resultPokemon) => {
        this.pokemon = resultPokemon;
      });
  }
}

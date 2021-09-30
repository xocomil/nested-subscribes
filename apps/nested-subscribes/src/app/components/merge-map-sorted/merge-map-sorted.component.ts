import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, map, mergeMap, toArray } from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'nested-merge-map-sorted',
  templateUrl: './merge-map-sorted.component.html',
  styleUrls: ['./merge-map-sorted.component.scss'],
})
export class MergeMapSortedComponent {
  pokemon: Pokemon[] = [];
  isLoading = false;

  constructor(private readonly _pokemonService: PokemonService) {}

  useMergeMap(): void {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    const withConcatMap$ = this._pokemonService.getPokemon().pipe(
      map((response) => response.results),
      mergeMap((result) => result),
      mergeMap((result) => this._pokemonService.getPokemonDetails(result.name))
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

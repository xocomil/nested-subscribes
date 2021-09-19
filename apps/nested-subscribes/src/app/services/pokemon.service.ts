import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonSearchResults } from '../models/pokemon-search-result';

const POKE_API_URL = 'https://pokeapi.co/api/v2/' as const;

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private readonly _httpClient: HttpClient) {}

  getPokemon(): Observable<PokemonSearchResults> {
    return this._httpClient.get<PokemonSearchResults>(
      `${POKE_API_URL}pokemon/?limit=10`
    );
  }

  getPokemonDetails(name: string): Observable<Pokemon> {
    return this._httpClient.get<Pokemon>(`${POKE_API_URL}pokemon/${name}/`);
  }
}

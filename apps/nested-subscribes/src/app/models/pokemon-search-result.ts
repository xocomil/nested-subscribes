import { ResourceLocation } from './resource-location';

export interface PokemonSearchResults {
  count: number;
  next: string;
  previous: string;
  results: ResourceLocation[];
}

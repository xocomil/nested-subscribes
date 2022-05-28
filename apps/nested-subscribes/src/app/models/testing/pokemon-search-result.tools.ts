import { faker } from '@faker-js/faker';
import { PokemonSearchResults } from '../pokemon-search-result';
import { createFakeResourceLocation } from './resource-location.tools';

export const createFakePokemonSearchResults = ({ count = 10 }: Partial<PokemonSearchResults> = {}): PokemonSearchResults => ({
  count,
  next: faker.internet.url(),
  previous: faker.internet.url(),
  results: Array.from({ length: count }, createFakeResourceLocation),
});

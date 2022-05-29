import { faker } from '@faker-js/faker';
import { createHttpFactory, HttpMethod } from '@ngneat/spectator/jest';
import { createFakePokemonSearchResults } from '../models/testing/pokemon-search-result.tools';
import { createFakePokemon } from '../models/testing/pokemon.tools';
import { PokemonService, POKE_API_URL } from './pokemon.service';

describe('PokemonService', () => {
  const createService = createHttpFactory({ service: PokemonService });

  it('should be created', () => {
    const spectator = createService();

    expect(spectator).toBeTruthy();
  });

  describe('getPokemon()', () => {
    const requestUrl = `${POKE_API_URL}pokemon/?limit=10`;

    it('should make appropriate request', () => {
      const spectator = createService();

      spectator.service.getPokemon().subscribe();

      spectator.expectOne(requestUrl, HttpMethod.GET);
    });

    it('should return an observable of pokemon results', () => {
      const spectator = createService();
      const expected = createFakePokemonSearchResults();
      let emitted = false;

      spectator.service.getPokemon().subscribe({
        next(result) {
          emitted = true;
          expect(result).toBe(expected);
        },
      });

      const req = spectator.expectOne(requestUrl, HttpMethod.GET);

      req.flush(expected);

      expect(emitted).toBe(true);
    });
  });

  describe('getPokemonDetails()', () => {
    const name = faker.random.word();
    const requestUrl = `${POKE_API_URL}pokemon/${name}/`;

    it('should make appropriate request', () => {
      const spectator = createService();

      spectator.service.getPokemonDetails(name).subscribe();

      spectator.expectOne(requestUrl, HttpMethod.GET);
    });

    it('should return an observable of pokemon results', () => {
      const spectator = createService();
      const expected = createFakePokemon({ name });
      let emitted = false;

      spectator.service.getPokemonDetails(name).subscribe({
        next(result) {
          emitted = true;
          expect(result).toBe(expected);
        },
      });

      const req = spectator.expectOne(requestUrl, HttpMethod.GET);

      req.flush(expected);

      expect(emitted).toBe(true);
    });
  });
});

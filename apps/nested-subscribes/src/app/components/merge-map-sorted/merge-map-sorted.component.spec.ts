import { createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent, MockModule } from 'ng-mocks';
import { EMPTY, NEVER, of } from 'rxjs';
import { MaterialModule } from '../../material.module';
import { createFakePokemonSearchResults } from '../../models/testing/pokemon-search-result.tools';
import { createFakePokemon } from '../../models/testing/pokemon.tools';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { MergeMapSortedComponent } from './merge-map-sorted.component';

const createComponent = createComponentFactory({
  component: MergeMapSortedComponent,
  imports: [MockModule(MaterialModule)],
  declarations: [MockComponent(PokemonListComponent)],
  mocks: [PokemonService],
});

describe('MergeMapSortedComponent', () => {
  it('should create', () => {
    const spectator = createComponent();

    expect(spectator).toBeTruthy();
  });

  describe('useMergeMap', () => {
    it('should not run if isLoading is true', () => {
      const spectator = createComponent({ props: { isLoading: true } });
      const pokemonService = spectator.inject(PokemonService);

      spectator.component.useMergeMap();

      expect(pokemonService.getPokemon).not.toHaveBeenCalled();
    });

    it('should set isLoading to true before data is loaded', () => {
      const spectator = createComponent();
      const pokemonService = spectator.inject(PokemonService);

      pokemonService.getPokemon.mockReturnValue(NEVER);

      spectator.component.useMergeMap();

      expect(pokemonService.getPokemon).toHaveBeenCalledTimes(1);
      expect(spectator.component.isLoading).toBe(true);
    });

    it('should set isLoading to false after data is loaded', () => {
      const spectator = createComponent();
      const pokemonService = spectator.inject(PokemonService);

      pokemonService.getPokemon.mockReturnValue(EMPTY);

      spectator.component.useMergeMap();

      expect(pokemonService.getPokemon).toHaveBeenCalledTimes(1);
      expect(spectator.component.isLoading).toBe(false);
    });

    it('should call getPokemon', () => {
      const spectator = createComponent();
      const pokemonService = spectator.inject(PokemonService);

      pokemonService.getPokemon.mockReturnValue(NEVER);

      spectator.component.useMergeMap();

      expect(pokemonService.getPokemon).toHaveBeenCalledTimes(1);
    });

    it('should call getPokemonDetails() with results from getPokemon()', () => {
      const spectator = createComponent();
      const pokemonService = spectator.inject(PokemonService);

      const numPokemon = 5;
      const results = createFakePokemonSearchResults({ count: numPokemon });
      const pokemonCalls = results.results.map((cur) => cur.name);

      pokemonService.getPokemon.mockReturnValue(of(results));
      pokemonService.getPokemonDetails.mockReturnValue(EMPTY);

      spectator.component.useMergeMap();

      expect(pokemonService.getPokemon).toHaveBeenCalledTimes(1);
      expect(pokemonService.getPokemonDetails).toHaveBeenCalledTimes(numPokemon);

      pokemonCalls.forEach((call, index) => expect(pokemonService.getPokemonDetails).toHaveBeenNthCalledWith(index + 1, call));
    });

    it('should set pokemon from the service', () => {
      const spectator = createComponent();
      const pokemonService = spectator.inject(PokemonService);

      const numPokemon = 5;
      const results = createFakePokemonSearchResults({ count: numPokemon });
      const fakePokemon = new Map(results.results.map(({ name }) => [name, createFakePokemon({ name })]));
      const expected = [...fakePokemon.values()].map((value) => value).sort((a, b) => a.id - b.id);

      pokemonService.getPokemon.mockReturnValue(of(results));
      pokemonService.getPokemonDetails.mockImplementation((name) => of(fakePokemon.get(name) ?? createFakePokemon({ name })));

      spectator.component.useMergeMap();

      expect(pokemonService.getPokemon).toHaveBeenCalledTimes(1);
      expect(spectator.component.isLoading).toBe(false);
      expect(spectator.component.pokemon).toEqual(expected);
    });
  });
});

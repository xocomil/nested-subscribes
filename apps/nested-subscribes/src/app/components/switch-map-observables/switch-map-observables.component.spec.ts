import { faker } from '@faker-js/faker';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent, MockModule } from 'ng-mocks';
import { NEVER, of } from 'rxjs';
import { MaterialModule } from '../../material.module';
import { createFakePokemonSearchResults } from '../../models/testing/pokemon-search-result.tools';
import { createFakePokemon } from '../../models/testing/pokemon.tools';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { SwitchMapObservablesComponent } from './switch-map-observables.component';

const createComponent = createComponentFactory({
  component: SwitchMapObservablesComponent,
  imports: [MockModule(MaterialModule)],
  declarations: [MockComponent(PokemonListComponent)],
  mocks: [PokemonService],
});

describe('MergedObservablesComponent', () => {
  it('should create', () => {
    const spectator = createComponent();

    expect(spectator).toBeTruthy();
  });

  describe('getData()', () => {
    it('should not query the pokemon service if isLoading is true', () => {
      const spectator = createComponent({ props: { isLoading: true } });
      const pokemonService = spectator.inject(PokemonService);

      spectator.component.getData();

      expect(pokemonService.getPokemon).not.toHaveBeenCalled();
    });

    it('should set isLoading to true before querying the pokemon service', () => {
      const spectator = createComponent();
      const pokemonService = spectator.inject(PokemonService);

      pokemonService.getPokemon.mockReturnValue(NEVER);

      spectator.component.getData();

      expect(spectator.component.isLoading).toBe(true);
    });

    it('should query the pokemon service', () => {
      const spectator = createComponent();
      const pokemonService = spectator.inject(PokemonService);

      pokemonService.getPokemon.mockReturnValue(NEVER);

      spectator.component.getData();

      expect(pokemonService.getPokemon).toHaveBeenCalledTimes(1);
    });

    it('should set isLoading to false after querying the pokemon service', () => {
      const spectator = createComponent();
      const pokemonService = spectator.inject(PokemonService);

      pokemonService.getPokemon.mockReturnValue(of(createFakePokemonSearchResults()));
      pokemonService.getPokemonDetails.mockReturnValue(of(createFakePokemon({ name: faker.random.word() })));

      spectator.component.getData();

      expect(spectator.component.isLoading).toBe(false);
    });

    it('should call getPokemonDetails() with results from getPokemon()', () => {
      const spectator = createComponent();
      const pokemonService = spectator.inject(PokemonService);

      const numPokemon = 5;
      const results = createFakePokemonSearchResults({ count: numPokemon });
      const pokemonCalls = results.results.map((cur) => cur.name);

      pokemonService.getPokemon.mockReturnValue(of(results));
      pokemonService.getPokemonDetails.mockReturnValue(NEVER);

      spectator.component.getData();

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
      const expected = [...fakePokemon.values()].map((value) => value);

      pokemonService.getPokemon.mockReturnValue(of(results));
      pokemonService.getPokemonDetails.mockImplementation((name) => of(fakePokemon.get(name) ?? createFakePokemon({ name })));

      spectator.component.getData();

      expect(pokemonService.getPokemon).toHaveBeenCalledTimes(1);
      expect(spectator.component.isLoading).toBe(false);
      expect(spectator.component.pokemon).toEqual(expected);
    });
  });
});

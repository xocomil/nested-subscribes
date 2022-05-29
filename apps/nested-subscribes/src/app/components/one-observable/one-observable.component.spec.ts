import { createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { OneObservableComponent } from './one-observable.component';

const createComponent = createComponentFactory({
  component: OneObservableComponent,
  declarations: [MockComponent(PokemonListComponent)],
  mocks: [PokemonService],
});

describe('OneObservableComponent', () => {
  it('should create', () => {
    const spectator = createComponent();

    expect(spectator).toBeTruthy();
  });
});

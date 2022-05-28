import { createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { MergeMapSortedComponent } from './merge-map-sorted.component';

const createComponent = createComponentFactory({
  component: MergeMapSortedComponent,
  declarations: [MockComponent(PokemonListComponent)],
  mocks: [PokemonService],
});

describe('MergeMapSortedComponent', () => {
  it('should create', () => {
    const spectator = createComponent();

    expect(spectator).toBeTruthy();
  });
});

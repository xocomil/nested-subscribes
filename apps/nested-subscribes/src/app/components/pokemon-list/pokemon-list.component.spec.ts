import { createComponentFactory } from '@ngneat/spectator/jest';
import { MockModule } from 'ng-mocks';
import { MaterialModule } from '../../material.module';
import { PokemonListComponent } from './pokemon-list.component';

const createComponent = createComponentFactory({
  component: PokemonListComponent,
  imports: [MockModule(MaterialModule)],
});

describe('PokemonListComponent', () => {
  it('should create', () => {
    const spectator = createComponent();

    expect(spectator).toBeTruthy();
  });
});

import { FormsModule } from '@angular/forms';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent, MockModule } from 'ng-mocks';
import { MaterialModule } from '../../material.module';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { NestedSubscribeComponent } from './nested-subscribe.component';

const createComponent = createComponentFactory({
  component: NestedSubscribeComponent,
  imports: [FormsModule, MockModule(MaterialModule)],
  declarations: [MockComponent(PokemonListComponent)],
  mocks: [PokemonService],
});

describe('NestedSubscribeComponent', () => {
  it('should create', () => {
    const spectator = createComponent();

    expect(spectator).toBeTruthy();
  });
});

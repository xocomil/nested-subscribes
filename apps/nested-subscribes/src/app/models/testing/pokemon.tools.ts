import { faker } from '@faker-js/faker';
import { Pokemon } from '../pokemon';
import { createFakeResourceLocation } from './resource-location.tools';

export const createFakePokemon = ({ name }: Partial<Pokemon> & { name: string }): Pokemon => ({
  name,
  id: faker.datatype.number(),
  base_experience: faker.datatype.number(),
  height: faker.datatype.number(),
  is_default: faker.datatype.boolean(),
  order: faker.datatype.number(),
  weight: faker.datatype.number(),
  abilities: [],
  forms: [],
  game_indices: [],
  held_items: [],
  location_area_encounters: faker.random.words(),
  moves: [],
  species: createFakeResourceLocation({ name }),
  sprites: faker.system.fileName(),
  stats: [],
  types: [],
});

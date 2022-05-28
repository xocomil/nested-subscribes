import { faker } from '@faker-js/faker';
import { ResourceLocation } from '../resource-location';

export const createFakeResourceLocation = ({ name = faker.random.word() }: Partial<ResourceLocation> = {}): ResourceLocation => ({
  name,
  url: faker.internet.url(),
});

import { ResourceLocation } from './resource-location';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: ResourceLocation[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: ResourceLocation;
  sprites: any;
  stats: Stat[];
  types: Type[];
}

export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

export interface GameIndex {
  game_index: number;
  version: ResourceLocation;
}

export interface VersionDetail {
  rarity: number;
  version: ResourceLocation;
}

export interface HeldItem {
  item: ResourceLocation;
  version_details: VersionDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  version_group: ResourceLocation;
  move_learn_method: ResourceLocation;
}

export interface Move {
  move: ResourceLocation;
  version_group_details: VersionGroupDetail[];
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: ResourceLocation;
}

export interface Type {
  slot: number;
  type: ResourceLocation;
}

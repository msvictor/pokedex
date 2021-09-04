import type { DefaultObject } from './DefaultObject';

export interface PokemonSpecies {
  id: number;
  order: number;
  name: string;
  capture_rate: number;
  hatch_counter: number;
  base_happiness: number;
  egg_groups: DefaultObject[];
  growth_rate: DefaultObject;
  habitat: DefaultObject;
}

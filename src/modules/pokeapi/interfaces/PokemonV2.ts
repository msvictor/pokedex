import type { DefaultObject } from './DefaultObject';
import type { PokemonAbility } from './PokemonAbility';
import type { PokemonMove } from './PokemonMove';
import type { PokemonStat } from './PokemonStat';

export interface PokemonV2 {
  id: number;
  order: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  is_default: boolean;
  abilities: PokemonAbility[];
  moves: PokemonMove[];
  species: DefaultObject;
  stats: PokemonStat[];
}

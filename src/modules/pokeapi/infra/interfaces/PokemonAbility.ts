import type { DefaultObject } from './DefaultObject';

export interface PokemonAbility {
  ability: DefaultObject;
  is_hidden: boolean;
  slot: number;
}

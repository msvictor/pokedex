export interface POKEAPI_DEFAULT_OBJECT {
  name: string;
  url: string;
}

export interface POKEAPI_ABILITY {
  ability: POKEAPI_DEFAULT_OBJECT;
  is_hidden: boolean;
  slot: number;
}

export interface POKEAPI_MOVE {
  move: POKEAPI_DEFAULT_OBJECT;
}

export interface POKEAPI_STAT {
  base_stat: number;
  effort: number;
  stat: POKEAPI_DEFAULT_OBJECT;
}

export interface POKEAPI_POKEMON {
  id: number;
  order: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  is_default: boolean;
  abilities: POKEAPI_ABILITY[];
  moves: POKEAPI_MOVE[];
  species: POKEAPI_DEFAULT_OBJECT;
  stats: POKEAPI_STAT[];
}

export interface POKEAPI_SPECIES {
  id: number;
  order: number;
  name: string;
  capture_rate: number;
  hatch_counter: number;
  base_happiness: number;
  egg_groups: POKEAPI_DEFAULT_OBJECT[];
  growth_rate: POKEAPI_DEFAULT_OBJECT;
  habitat: POKEAPI_DEFAULT_OBJECT;
}

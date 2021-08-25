export type tPOKE_TYPES_NAMES =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy';

export interface iGREY_COLORS {
  '50': string;
  '100': string;
  '300': string;
  '400': string;
}

export interface iTYPE_COLORS {
  normal: string;
  fighting: string;
  flying: string;
  poison: string;
  ground: string;
  rock: string;
  bug: string;
  ghost: string;
  steel: string;
  fire: string;
  water: string;
  grass: string;
  electric: string;
  psychic: string;
  ice: string;
  dragon: string;
  dark: string;
  fairy: string;
}

export interface iGET_COLOR_BY_TYPE {
  typeName: tPOKE_TYPES_NAMES;
}

export interface iPOKE_EVOLUTION {
  num: string;
  name: string;
}

export interface iPOKEMON {
  id: number;
  num: string;
  name: string;
  img: string;
  type: string[];
  height: string;
  weight: string;
  candy: string;
  candy_count: number;
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: number[];
  weaknesses: string[];
  prev_evolution?: iPOKE_EVOLUTION[];
  next_evolution?: iPOKE_EVOLUTION[];
  empty?: boolean;
}

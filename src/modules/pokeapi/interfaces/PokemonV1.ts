import type { PokemonEvolution } from './PokemonEvolution';

export interface PokemonV1 {
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
  prev_evolution?: PokemonEvolution[];
  next_evolution?: PokemonEvolution[];
  empty?: boolean;
}

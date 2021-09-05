import type { PokemonV1 } from '@modules/pokeapi/infra/interfaces/PokemonV1';

class SetEmptyPokemonService {
  public execute(pokeId: number): PokemonV1 {
    return {
      empty: true,
      id: pokeId,
      name: '',
      num: '',
      img: '',
      type: [],
      height: '',
      weight: '',
      candy: '',
      candy_count: 0,
      egg: '',
      spawn_chance: 0,
      avg_spawns: 0,
      spawn_time: '',
      multipliers: [],
      weaknesses: [],
    };
  }
}

export default new SetEmptyPokemonService();

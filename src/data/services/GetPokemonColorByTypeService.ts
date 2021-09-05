import type { PokemonTypes } from '@infra/interfaces/PokemonTypes';

import AppColors from '@core/AppColors';

interface GetPokemonColorByTypeProps {
  type: PokemonTypes;
}

class GetPokemonColorByTypeService {
  public execute({ type }: GetPokemonColorByTypeProps): string {
    const pokemonColor = {
      normal: AppColors.TYPE_NORMAL,
      fighting: AppColors.TYPE_FIGHTING,
      flying: AppColors.TYPE_FLYING,
      poison: AppColors.TYPE_POISON,
      ground: AppColors.TYPE_GROUND,
      rock: AppColors.TYPE_ROCK,
      bug: AppColors.TYPE_BUG,
      ghost: AppColors.TYPE_GHOST,
      steel: AppColors.TYPE_STEEL,
      fire: AppColors.TYPE_FIRE,
      water: AppColors.TYPE_WATER,
      grass: AppColors.TYPE_GRASS,
      electric: AppColors.TYPE_ELECTRIC,
      psychic: AppColors.TYPE_PSYCHIC,
      ice: AppColors.TYPE_ICE,
      dragon: AppColors.TYPE_DRAGON,
      dark: AppColors.TYPE_DARK,
      fairy: AppColors.TYPE_FAIRY,
    };

    return pokemonColor[type] || 'transparent';
  }
}

export default new GetPokemonColorByTypeService();

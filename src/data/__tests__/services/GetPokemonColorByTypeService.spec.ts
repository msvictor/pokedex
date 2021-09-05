import type { PokemonTypes } from '@infra/interfaces/PokemonTypes';

import AppColors from '@core/AppColors';
import GetPokemonColorByTypeService from '@data/services/GetPokemonColorByTypeService';

describe('Get Pokemon Color', () => {
  it('should be able to get a color by a provided pokemon type', () => {
    const color = GetPokemonColorByTypeService.execute({
      type: 'fire',
    });

    expect(color).toBe(AppColors.TYPE_FIRE);
  });

  it('should not be able to get a color by a nonexistent pokemon type', () => {
    const color = GetPokemonColorByTypeService.execute({
      type: 'nonexistent-type' as PokemonTypes,
    });

    expect(color).toBe('transparent');
  });
});

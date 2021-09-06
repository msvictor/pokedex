import type { PokemonStat } from '@modules/pokeapi/infra/interfaces/PokemonStat';

import React from 'react';
import { render } from '@testing-library/react-native';
import { Stats } from '@modules/details/components/Sections/Stats';

const statsSectionProps = {
  stats: [
    {
      stat: {
        name: '1',
      },
      base_stat: 0,
    },
    {
      stat: {
        name: '2',
      },
      base_stat: 0,
    },
  ] as PokemonStat[],
};

describe('Evolution section component', () => {
  it('should be able to render evolution section component', () => {
    const { getByTestId } = render(<Stats {...statsSectionProps} />);
    expect(getByTestId('details-stats-section')).toBeTruthy();
  });
});

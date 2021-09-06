import type { PokemonMove } from '@modules/pokeapi/infra/interfaces/PokemonMove';

import React from 'react';
import { render } from '@testing-library/react-native';
import { Moves } from '@modules/details/components/Sections/Moves';

const movesSectionProps = {
  moves: [
    {
      move: {
        name: 'test',
      },
    },
  ] as PokemonMove[],
};

describe('Moves section component', () => {
  it('should be able to render moves section component', () => {
    const { getByTestId } = render(<Moves {...movesSectionProps} />);
    expect(getByTestId('details-moves-section')).toBeTruthy();
  });

  it('should be able to render a move item component', () => {
    const { getAllByText } = render(<Moves {...movesSectionProps} />);

    expect(getAllByText('test')).toBeTruthy();
  });
});

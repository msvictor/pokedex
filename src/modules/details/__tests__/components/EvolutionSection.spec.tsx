import type { PokemonTypes } from '@infra/interfaces/PokemonTypes';
import type { PokemonEvolution } from '@modules/pokeapi/infra/interfaces/PokemonEvolution';

import React from 'react';
import { render } from '@testing-library/react-native';
import { Evolution } from '@modules/details/components/Sections/Evolution';

const evolutionSectionProps = {
  type: '' as PokemonTypes,
  num: '',
  name: '',
  prev: [] as PokemonEvolution[],
  next: [] as PokemonEvolution[],
};

describe('Evolution section component', () => {
  it('should be able to render evolution section component', () => {
    const { getByTestId } = render(<Evolution {...evolutionSectionProps} />);
    expect(getByTestId('details-evolution-section')).toBeTruthy();
  });

  it('should be able to render evolution section component without pass prev and next evolutions', () => {
    const { getByTestId } = render(<Evolution type="bug" num="" name="" />);
    expect(getByTestId('details-evolution-section')).toBeTruthy();
  });
});

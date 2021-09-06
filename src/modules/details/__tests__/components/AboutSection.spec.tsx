import type { PokemonV1 } from '@modules/pokeapi/infra/interfaces/PokemonV1';
import type { PokemonV2 } from '@modules/pokeapi/infra/interfaces/PokemonV2';
import type { PokemonSpecies } from '@modules/pokeapi/infra/interfaces/PokemonSpecies';

import React from 'react';
import { render } from '@testing-library/react-native';
import { About } from '@modules/details/components/Sections/About';

const aboutSectionProps = {
  pokemon: { height: '', weight: '', weaknesses: [''] } as PokemonV1,
  info: {
    species: { name: '' },
    abilities: [{ ability: { name: 'test' } }],
  } as PokemonV2,
  species: { egg_groups: [{ name: 'test' }] } as PokemonSpecies,
};

describe('About section component', () => {
  it('should be able to render about section component', () => {
    const { getByTestId } = render(<About {...aboutSectionProps} />);
    expect(getByTestId('details-about-section')).toBeTruthy();
  });

  it('should be able to render an abilities info row and egg groups info row', () => {
    const { getAllByText } = render(<About {...aboutSectionProps} />);

    expect(getAllByText('test')).toBeTruthy();
  });
});

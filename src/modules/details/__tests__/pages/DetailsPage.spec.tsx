import type { PokemonV1 } from '@modules/pokeapi/infra/interfaces/PokemonV1';

import React from 'react';
import { render } from '@testing-library/react-native';
import { DetailsPage } from '@modules/details/pages/DetailsPage';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        type: ['fire'],
      } as PokemonV1,
    }),
  };
});

describe('Details Page tests', () => {
  it('should be able to render details page', () => {
    const { getByTestId } = render(<DetailsPage />);

    expect(getByTestId('details-page')).toBeTruthy();
  });
});

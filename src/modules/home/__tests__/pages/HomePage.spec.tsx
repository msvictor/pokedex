import React from 'react';
import { render } from '@testing-library/react-native';
import { HomePage } from '@modules/home/pages/HomePage';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

jest.mock('@modules/pokeapi/contexts/pokemons', () => {
  return {
    usePokemons: () => ({
      pokemons: [],
      filteredPokemons: [],
      filterPokemonsByName: jest.fn(),
    }),
  };
});

describe('Home Page tests', () => {
  it('Should contains an search field', () => {
    const { getByPlaceholderText } = render(<HomePage />);

    expect(getByPlaceholderText('Search Pokémons')).toBeTruthy();
  });
});

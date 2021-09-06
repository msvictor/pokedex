import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SearchField } from '@modules/home/components/SearchField';

const mockedFilterPokemons = jest.fn();

jest.mock('@modules/pokeapi/contexts/pokemons', () => {
  return {
    usePokemons: () => ({
      filterPokemonsByName: mockedFilterPokemons,
    }),
  };
});

describe('Search Field test', () => {
  it('should be able to render a search field component', () => {
    const { getByPlaceholderText } = render(<SearchField />);

    expect(getByPlaceholderText('Search Pokémons')).toBeTruthy();
  });

  it('should be able to filter pokemons on input change', async () => {
    const { getByPlaceholderText } = render(<SearchField />);
    const searchField = getByPlaceholderText('Search Pokémons');

    fireEvent.changeText(searchField, { text: 'bulba' });

    await waitFor(() => {
      expect(mockedFilterPokemons).toHaveBeenCalledWith(
        expect.objectContaining({ text: 'bulba' })
      );
    });
  });
});

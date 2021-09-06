import React from 'react';
import { render } from '@testing-library/react-native';
import { PokeCard } from '@modules/home/components/PokeCard';

const pokeCardProps = {
  num: '',
  name: '',
  type: ['test'],
  imageUrl: '',
};

describe('PokeCard component', () => {
  it('should be able to render a PokeCard component', () => {
    const { getByTestId } = render(<PokeCard {...pokeCardProps} />);

    expect(getByTestId('home-pokecard-component')).toBeTruthy();
  });

  it('should be able to render a PokeCard component with empty flag', () => {
    const { getByTestId } = render(<PokeCard {...pokeCardProps} empty />);

    expect(getByTestId('home-pokecard-component')).toBeTruthy();
  });

  it('should be able to render a type badge inside a pokecard', () => {
    const { getByText } = render(<PokeCard {...pokeCardProps} />);

    expect(getByText('test')).toBeTruthy();
  });
});

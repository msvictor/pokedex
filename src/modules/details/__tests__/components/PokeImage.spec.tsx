import React from 'react';
import { render } from '@testing-library/react-native';
import { PokeImage } from '@modules/details/components/PokeImage';

describe('PokeImage component', () => {
  it('should be render the PokeImage component', () => {
    const { getByA11yValue } = render(<PokeImage uri="test" />);

    expect(getByA11yValue({ text: 'pokeImage' })).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react-native';
import { Header } from '@modules/details/components/Header';

const headerProps = {
  num: '',
  name: '',
  type: ['test'],
  goBack: jest.fn(),
  markFav: jest.fn(),
};

describe('Header component', () => {
  it('should be able to render a header component', () => {
    const { getByTestId } = render(<Header {...headerProps} />);

    expect(getByTestId('details-header')).toBeTruthy();
  });

  it('should be able to render a type badge inside a header', () => {
    const { getByText } = render(<Header {...headerProps} />);

    expect(getByText('test')).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react-native';
import { TypeBadge } from '@modules/_shared/components/TypeBadge';

describe('TypeBadge Component', () => {
  it('should be able to render a badge component', () => {
    const { getByText } = render(<TypeBadge typeName="test" />);
    expect(getByText('test')).toBeTruthy();
  });
});

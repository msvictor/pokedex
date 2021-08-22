import React from 'react';

import { Container, Icon, Input } from './styles';

export const SearchField: React.FC = () => {
  return (
    <Container>
      <Icon name="search" size={20} />
      <Input placeholder="Search Pokémons..." />
    </Container>
  );
};

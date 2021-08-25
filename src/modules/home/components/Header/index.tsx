import React from 'react';
import { SearchField } from '../SearchField';

import { Container, PokeBall, Title } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <PokeBall />
      <Title>What Pokémon are you looking for?</Title>
      <SearchField />
    </Container>
  );
};

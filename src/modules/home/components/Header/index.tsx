import React from 'react';

import { Container, PokeBall, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <PokeBall />
      <Title>What Pokémon are you looking for?</Title>
    </Container>
  );
};

export default Header;

import React from 'react';
import { usePokeapi } from '@modules/pokeapi/context';

import { Container, Icon, Input } from './styles';

export const SearchField: React.FC = () => {
  const { filterPokemonsByName } = usePokeapi();

  return (
    <Container>
      <Icon name="search" size={20} />
      <Input
        placeholder="Search Pokémons..."
        onChangeText={(text) => filterPokemonsByName(text)}
      />
    </Container>
  );
};

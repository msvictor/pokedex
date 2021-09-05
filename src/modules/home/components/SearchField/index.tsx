import React from 'react';
import { usePokemons } from '@modules/pokeapi/contexts/pokemons';

import { Container, Icon, Input } from './styles';

export const SearchField: React.FC = () => {
  const { filterPokemonsByName } = usePokemons();

  return (
    <Container>
      <Icon name="search" size={20} />
      <Input
        placeholder="Search Pokémons"
        onChangeText={(text) => filterPokemonsByName(text)}
      />
    </Container>
  );
};

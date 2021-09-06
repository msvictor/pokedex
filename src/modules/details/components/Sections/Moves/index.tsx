import type { PokemonMove } from '@modules/pokeapi/infra/interfaces/PokemonMove';

import React from 'react';

import { FlatList } from 'react-native';
import { Container, MoveBox, MoveName } from './styles';

interface iMovesSectionProps {
  moves: PokemonMove[];
}

export const Moves: React.FC<iMovesSectionProps> = ({
  moves,
}: iMovesSectionProps) => {
  return (
    <Container testID="details-moves-section">
      <FlatList
        data={moves}
        keyExtractor={(item) => item.move.name}
        renderItem={({ item }) => {
          return (
            <MoveBox>
              <MoveName>{item.move.name}</MoveName>
            </MoveBox>
          );
        }}
      />
    </Container>
  );
};

import React from 'react';
import type { POKEAPI_MOVE } from '@contexts/pokeapi/types';

import { FlatList } from 'react-native';
import { Container, MoveBox, MoveName } from './styles';

interface iMovesSectionProps {
  moves: POKEAPI_MOVE[];
}

export const Moves: React.FC<iMovesSectionProps> = ({
  moves,
}: iMovesSectionProps) => {
  return (
    <Container>
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

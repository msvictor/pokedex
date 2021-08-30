import React from 'react';

import { Container, PokeImage, PokeName } from './styles';

interface iEvolutionPresentationProps {
  color: string;
  name: string;
  uri: string;
}

export const EvolutionPresentation: React.FC<iEvolutionPresentationProps> = ({
  color,
  name,
  uri,
}: iEvolutionPresentationProps) => {
  return (
    <Container>
      <PokeImage bgColor={color} source={{ uri }} />
      <PokeName>{name}</PokeName>
    </Container>
  );
};

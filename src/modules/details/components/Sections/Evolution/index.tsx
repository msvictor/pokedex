import type { PokemonTypes } from '@infra/interfaces/PokemonTypes';
import type { PokemonEvolution } from '@modules/pokeapi/infra/interfaces/PokemonEvolution';

import React from 'react';
import AppConstants from '@core/AppConstants';

import GetPokemonColorByTypeService from '@data/services/GetPokemonColorByTypeService';

import { Container } from './styles';
import { EvolutionPresentation } from './components/EvolutionPresentation';

interface iEvolutionSectionProps {
  type: PokemonTypes;
  num: string;
  name: string;
  prev?: PokemonEvolution[];
  next?: PokemonEvolution[];
}

export const Evolution: React.FC<iEvolutionSectionProps> = ({
  type,
  num,
  name,
  prev = [],
  next = [],
}: iEvolutionSectionProps) => {
  const evolutions: PokemonEvolution[] = [...prev, { num, name }, ...next];
  const color = GetPokemonColorByTypeService.execute({
    type,
  });

  return (
    <Container>
      {evolutions.map((evolution) => (
        <EvolutionPresentation
          key={evolution.name}
          name={evolution.name}
          uri={`${AppConstants.POKE_IMAGE_URL}/${evolution.num}.png`}
          color={color}
        />
      ))}
    </Container>
  );
};

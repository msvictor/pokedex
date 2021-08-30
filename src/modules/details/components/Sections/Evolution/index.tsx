import React from 'react';
import type { POKE_EVOLUTION, POKE_TYPES_NAMES } from '@types';

import AppConstants from '@core/constants';
import AppColors from '@core/colors';

import { Container } from './styles';
import { EvolutionPresentation } from './components/EvolutionPresentation';

interface iEvolutionSectionProps {
  type: POKE_TYPES_NAMES;
  num: string;
  name: string;
  prev: POKE_EVOLUTION[];
  next: POKE_EVOLUTION[];
}

export const Evolution: React.FC<iEvolutionSectionProps> = ({
  type,
  num,
  name,
  prev,
  next,
}: iEvolutionSectionProps) => {
  const color = AppColors.getColorByTypeName({
    typeName: type as POKE_TYPES_NAMES,
  });

  const evolutions: POKE_EVOLUTION[] = [...prev, { num, name }, ...next];

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

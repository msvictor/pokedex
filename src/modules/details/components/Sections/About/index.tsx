import React from 'react';
import type { POKEMON } from '@types';
import type { POKEAPI_POKEMON, POKEAPI_SPECIES } from '@contexts/pokeapi/types';

import { InfoRow } from './components/InfoRow';

import { Container, Title } from './styles';

interface iAboutSectionProps {
  pokemon: POKEMON;
  info: POKEAPI_POKEMON;
  species: POKEAPI_SPECIES;
}

export const About: React.FC<iAboutSectionProps> = ({
  pokemon,
  info,
  species,
}: iAboutSectionProps) => {
  const { height, weight, weaknesses } = pokemon;
  const { species: spc, abilities } = info;
  const { egg_groups } = species;

  return (
    <Container>
      <InfoRow label="Specie" caption={spc.name} />

      <InfoRow label="Height" caption={height} />

      <InfoRow label="Weight" caption={weight} />

      <InfoRow
        label="Abilities"
        caption={abilities.map((abl) => abl.ability.name).join(', ')}
      />

      <InfoRow label="Weaknesses" caption={weaknesses.join(', ')} />

      <Title>Breeding</Title>

      <InfoRow
        label="Egg Groups"
        caption={egg_groups.map((groups) => groups.name).join(', ')}
      />
    </Container>
  );
};

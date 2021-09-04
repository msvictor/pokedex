import type { PokemonV1 } from '@modules/pokeapi/interfaces/PokemonV1';
import type { PokemonV2 } from '@modules/pokeapi/interfaces/PokemonV2';
import type { PokemonSpecies } from '@modules/pokeapi/interfaces/PokemonSpecies';

import React from 'react';

import { Container, Title } from './styles';
import { InfoRow } from './components/InfoRow';

interface iAboutSectionProps {
  pokemon: PokemonV1;
  info: PokemonV2;
  species: PokemonSpecies;
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

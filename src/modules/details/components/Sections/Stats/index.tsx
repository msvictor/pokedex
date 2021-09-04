import type { PokemonStat } from '@modules/pokeapi/interfaces/PokemonStat';

import React from 'react';

import { Container } from './styles';
import { StatRow } from './components/StatRow';

interface iStatsSectionProps {
  stats: PokemonStat[];
}

export const Stats: React.FC<iStatsSectionProps> = ({
  stats,
}: iStatsSectionProps) => {
  return (
    <Container>
      {stats.map((pokeStat) => (
        <StatRow
          key={pokeStat.stat.name}
          label={pokeStat.stat.name}
          statValue={pokeStat.base_stat}
        />
      ))}
      <StatRow
        label="Total"
        statValue={
          stats.reduce((prev, current) => {
            // eslint-disable-next-line
            current = {
              ...current,
              base_stat: prev.base_stat + current.base_stat,
            };

            return current;
          }).base_stat
        }
      />
    </Container>
  );
};

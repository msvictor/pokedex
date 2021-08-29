import React from 'react';

import {
  Container,
  Label,
  StatValueContainer,
  StatValue,
  StatValueBar,
  StatValueBarProgress,
} from './styles';

interface iStatRowPops {
  label: string;
  statValue: number;
}

export const StatRow: React.FC<iStatRowPops> = ({
  label,
  statValue,
}: iStatRowPops) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StatValueContainer>
        <StatValue>{statValue}</StatValue>
        <StatValueBar>
          <StatValueBarProgress statValue={statValue} />
        </StatValueBar>
      </StatValueContainer>
    </Container>
  );
};

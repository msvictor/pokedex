import React from 'react';

import { Container, Label, Caption } from './styles';

interface iInfoRowPops {
  label: string;
  caption: string;
}

export const InfoRow: React.FC<iInfoRowPops> = ({
  label,
  caption,
}: iInfoRowPops) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Caption>{caption}</Caption>
    </Container>
  );
};

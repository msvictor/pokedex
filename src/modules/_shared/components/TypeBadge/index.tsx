import React from 'react';

import { Container, Type } from './styles';

interface iTypeBadgeProps {
  typeName: string;
}

export const TypeBadge: React.FC<iTypeBadgeProps> = ({
  typeName,
}: iTypeBadgeProps) => {
  return (
    <Container>
      <Type>{typeName}</Type>
    </Container>
  );
};

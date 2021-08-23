import React from 'react';

import { Container, Type } from './styles';

interface iTypeBadgeProps {
  typeName: string;
}

const TypeBadge: React.FC<iTypeBadgeProps> = ({
  typeName,
}: iTypeBadgeProps) => {
  return (
    <Container>
      <Type>{typeName}</Type>
    </Container>
  );
};

export default TypeBadge;

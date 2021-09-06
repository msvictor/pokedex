import React from 'react';

import { TypeBadge } from '@modules/_shared/components/TypeBadge';
import { Container, RowOptions, Icon, PokeNum, Row, PokeName } from './styles';

interface iHeaderProps {
  num: string;
  name: string;
  type: string[];
  goBack: () => void;
  markFav: () => void;
}

export const Header: React.FC<iHeaderProps> = ({
  num,
  name,
  type,
  goBack,
  markFav,
}: iHeaderProps) => {
  return (
    <Container testID="details-header">
      <RowOptions>
        <Icon name="arrow-left" onPress={goBack} />
        <PokeNum>#{num}</PokeNum>
        <Icon name="heart" onPress={markFav} />
      </RowOptions>
      <Row>
        <PokeName>{name}</PokeName>
      </Row>
      <Row>
        {type.map((typeName) => (
          <TypeBadge key={typeName} typeName={typeName} />
        ))}
      </Row>
    </Container>
  );
};

import React from 'react';

import AppColors from '../../../../core/colors';
import type { tPOKE_TYPES_NAMES } from '../../../../@types';
import TypeBadge from '../../../_shared/components/TypeBadge';

import {
  Container,
  Identification,
  Name,
  Num,
  Pokemon,
  Type,
  Thumbnail,
  PokeImage,
  PokeBall,
} from './styles';

interface iPokeCardProps {
  name: string;
  num: string;
  imageUrl: string;
  type: string[];
}

export const PokeCard: React.FC<iPokeCardProps> = ({
  name,
  num,
  imageUrl,
  type,
}: iPokeCardProps) => {
  return (
    <Container
      bgColor={AppColors.getColorByTypeName({
        typeName: type[0].toLowerCase() as tPOKE_TYPES_NAMES,
      })}
    >
      <Identification>
        <Name>{name}</Name>
        <Num>#{num}</Num>
      </Identification>
      <Pokemon>
        <Type>
          {type.map((typeName) => (
            <TypeBadge key={typeName} typeName={typeName} />
          ))}
        </Type>
        <Thumbnail>
          <PokeBall />
          <PokeImage source={{ uri: imageUrl }} />
        </Thumbnail>
      </Pokemon>
    </Container>
  );
};

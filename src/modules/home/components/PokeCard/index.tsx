import React from 'react';

import AppColors from '@core/colors';

import { TypeBadge } from '@components/TypeBadge';

import type { POKE_TYPES_NAMES } from '@types';

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
  num: string;
  name: string;
  type: string[];
  empty: boolean;
  imageUrl: string;
}

export const PokeCard: React.FC<iPokeCardProps> = ({
  num,
  name,
  type,
  imageUrl,
  empty = false,
}: iPokeCardProps) => {
  return (
    <Container
      bgColor={
        empty
          ? AppColors.TRANSPARENT
          : AppColors.getColorByTypeName({
              typeName: type[0].toLowerCase() as POKE_TYPES_NAMES,
            })
      }
    >
      {!empty && (
        <>
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
        </>
      )}
    </Container>
  );
};

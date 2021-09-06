import type { TouchableOpacityProps } from 'react-native';
import type { PokemonTypes } from '@infra/interfaces/PokemonTypes';

import React, { Fragment } from 'react';
import AppColors from '@core/AppColors';

import GetPokemonColorByTypeService from '@data/services/GetPokemonColorByTypeService';

import { TypeBadge } from '@modules/_shared/components/TypeBadge';
import {
  Num,
  Name,
  Type,
  Pokemon,
  PokeBall,
  Thumbnail,
  PokeImage,
  Container,
  Identification,
} from './styles';

interface iPokeCardProps extends TouchableOpacityProps {
  num: string;
  name: string;
  type: string[];
  empty?: boolean;
  imageUrl: string;
}

export const PokeCard: React.FC<iPokeCardProps> = ({
  num,
  name,
  type,
  imageUrl,
  empty = false,
  ...rest
}: iPokeCardProps) => {
  return (
    <Container
      testID="home-pokecard-component"
      activeOpacity={0.8}
      bgColor={
        empty
          ? AppColors.TRANSPARENT
          : GetPokemonColorByTypeService.execute({
              type: type[0].toLowerCase() as PokemonTypes,
            })
      }
      {...rest}
    >
      {!empty && (
        <Fragment>
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
        </Fragment>
      )}
    </Container>
  );
};

import type { POKEMON, POKE_TYPES_NAMES } from '@types';
import type { DETAIL_SECTIONS_NAME } from '@modules/details/@types';
import type { POKEAPI_POKEMON, POKEAPI_SPECIES } from '@contexts/pokeapi/types';

import React, { useCallback, useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useLoading } from '@hooks/useLoading';
import { usePokeapi } from '@contexts/pokeapi';

import AppColors from '@core/colors';

import { Header } from '@details/components/Header';
import { PokeImage } from '@details/components/PokeImage';

import { useSection } from '@details/hooks/useSection';

import {
  Container,
  Content,
  SectionOptions,
  Option,
  SectionContent,
  Loader,
} from './styles';

export const DetailsPage: React.FC = () => {
  const [pokeInfo, setPokeInfo] = useState<POKEAPI_POKEMON>(
    {} as POKEAPI_POKEMON
  );
  const [pokeSpecies, setPokeSpecies] = useState<POKEAPI_SPECIES>(
    {} as POKEAPI_SPECIES
  );

  const pokemon = useRoute().params as POKEMON;
  const { goBack } = useNavigation();
  const { isLoading, turnLoadingOn, turnLoadingOff } = useLoading();
  const { getPokemonInfo, getPokemonSpecies } = usePokeapi();
  const { allSections, ActiveSectionContent, handleActiveSection } = useSection(
    {
      pokemon,
      info: pokeInfo,
      species: pokeSpecies,
    }
  );

  const handleMarkAsFavorite = useCallback(() => {
    // do something
  }, []);

  useEffect(() => {
    async function getData(): Promise<void> {
      turnLoadingOn();

      await Promise.all([
        getPokemonInfo(pokemon.id),
        getPokemonSpecies(pokemon.id),
      ]).then(([info, species]) => {
        setPokeInfo(info);
        setPokeSpecies(species);
      });

      turnLoadingOff();
    }

    getData();
  }, []);

  return (
    <Container
      bgColor={AppColors.getColorByTypeName({
        typeName: pokemon.type[0].toLowerCase() as POKE_TYPES_NAMES,
      })}
    >
      <Header
        num={pokemon.num}
        name={pokemon.name}
        type={pokemon.type}
        goBack={goBack}
        markFav={handleMarkAsFavorite}
      />
      <Content>
        <PokeImage uri={pokemon.img} />

        <SectionOptions>
          {allSections.map(({ caption, isActive }) => (
            <Option
              key={caption}
              isActive={isActive}
              onPress={() =>
                handleActiveSection({
                  sectionName: caption as DETAIL_SECTIONS_NAME,
                })
              }
            >
              {caption}
            </Option>
          ))}
        </SectionOptions>

        <SectionContent>
          {isLoading ? (
            <Loader
              color={AppColors.getColorByTypeName({
                typeName: pokemon.type[0].toLowerCase() as POKE_TYPES_NAMES,
              })}
            />
          ) : (
            <ActiveSectionContent />
          )}
        </SectionContent>
      </Content>
    </Container>
  );
};

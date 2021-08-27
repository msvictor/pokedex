import type { DETAIL_SECTION, POKEMON, POKE_TYPES_NAMES } from '@types';
import type { POKEAPI_POKEMON, POKEAPI_SPECIES } from '@contexts/pokeapi/types';

import React, { useCallback, useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useLoading } from '@hooks/useLoading';
import { usePokeapi } from '@contexts/pokeapi';

import AppColors from '@core/colors';

import DetailsSections from '@details/utils/DetailsSections';
import { Header } from '@details/components/Header';
import { PokeImage } from '@details/components/PokeImage';
import { SectionOptions } from '@details/components/SectionOptions';
import { About } from '@details/components/Sections/About';

import { Container, Content, Section, Loader } from './styles';

export const DetailsPage: React.FC = () => {
  const pokemon = useRoute().params as POKEMON;
  const { goBack } = useNavigation();
  const { isLoading, turnLoadingOn, turnLoadingOff } = useLoading();
  const { getPokemonInfo, getPokemonSpecies } = usePokeapi();

  const [sections, setSections] = useState<DETAIL_SECTION[]>(
    DetailsSections.SECTIONS
  );
  const [pokeInfo, setPokeInfo] = useState<POKEAPI_POKEMON>(
    {} as POKEAPI_POKEMON
  );
  const [pokeSpecies, setPokeSpecies] = useState<POKEAPI_SPECIES>(
    {} as POKEAPI_SPECIES
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
      ]).then((values) => {
        const [info, species] = values;

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

        <SectionOptions options={sections} />

        <Section>
          {isLoading ? (
            <Loader
              color={AppColors.getColorByTypeName({
                typeName: pokemon.type[0].toLowerCase() as POKE_TYPES_NAMES,
              })}
            />
          ) : (
            <About pokemon={pokemon} info={pokeInfo} species={pokeSpecies} />
          )}
        </Section>
      </Content>
    </Container>
  );
};

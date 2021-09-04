import type { PokemonTypes } from '@infra/interfaces/PokemonTypes';
import type { PokemonV1 } from '@modules/pokeapi/interfaces/PokemonV1';
import type { PokemonV2 } from '@modules/pokeapi/interfaces/PokemonV2';
import type { PokemonSpecies } from '@modules/pokeapi/interfaces/PokemonSpecies';
import type { SectionsNames } from '@modules/details/interfaces/SectionsNames';

import React, { useCallback, useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useLoading } from '@modules/_shared/hooks/useLoading';
import { useSection } from '@modules/details/hooks/useSection';

import GetPokemonColorByTypeService from '@data/services/GetPokemonColorByTypeService';
import GetPokemonInfoService from '@modules/pokeapi/services/GetPokemonInfoService';
import GetPokemonSpeciesService from '@modules/pokeapi/services/GetPokemonSpeciesService';

import { Header } from '@modules/details/components/Header';
import { PokeImage } from '@modules/details/components/PokeImage';
import {
  Container,
  Content,
  SectionOptions,
  Option,
  SectionContent,
  Loader,
} from './styles';

export const DetailsPage: React.FC = () => {
  const [pokeInfo, setPokeInfo] = useState<PokemonV2>({} as PokemonV2);
  const [pokeSpecies, setPokeSpecies] = useState<PokemonSpecies>(
    {} as PokemonSpecies
  );

  const pokemon = useRoute().params as PokemonV1;
  const typeColor = GetPokemonColorByTypeService.execute({
    type: pokemon.type[0].toLowerCase() as PokemonTypes,
  });
  const { goBack } = useNavigation();
  const { isLoading, turnLoadingOn, turnLoadingOff } = useLoading();
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
        GetPokemonInfoService.execute(pokemon.id),
        GetPokemonSpeciesService.execute(pokemon.id),
      ]).then(([info, species]) => {
        setPokeInfo(info);
        setPokeSpecies(species);
      });

      turnLoadingOff();
    }

    getData();
  }, []);

  return (
    <Container bgColor={typeColor}>
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
              onPress={() => handleActiveSection(caption as SectionsNames)}
            >
              {caption}
            </Option>
          ))}
        </SectionOptions>

        <SectionContent>
          {isLoading ? <Loader color={typeColor} /> : <ActiveSectionContent />}
        </SectionContent>
      </Content>
    </Container>
  );
};

import type { PokemonV1 } from '@modules/pokeapi/interfaces/PokemonV1';
import type { NavigationProp, ParamListBase } from '@react-navigation/native';

import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { usePokeapi } from '@modules/pokeapi/context';

import SetEmptyPokemonService from '@modules/home/services/SetEmptyPokemonService';

import { SafeAreaView, FlatList } from 'react-native';
import { Header } from '@modules/home/components/Header';
import { PokeCard } from '@modules/home/components/PokeCard';

export const HomePage: React.FC = () => {
  const COLUMNS_NUMBER = 2;

  const { pokemons, filteredPokemons } = usePokeapi();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const createRows = useCallback(
    (pokeArray: PokemonV1[], columns: number): PokemonV1[] => {
      const rows = Math.floor(pokeArray.length / columns);

      let lastRowElements = pokeArray.length - rows * columns;

      while (lastRowElements !== columns && lastRowElements !== 0) {
        pokeArray.push(SetEmptyPokemonService.execute(lastRowElements));
        lastRowElements += 1;
      }

      return pokeArray;
    },
    []
  );

  return (
    <SafeAreaView>
      {useMemo(
        () => (
          <FlatList
            data={createRows(
              filteredPokemons.length > 0 ? filteredPokemons : pokemons,
              COLUMNS_NUMBER
            )}
            numColumns={COLUMNS_NUMBER}
            keyExtractor={(item) => item.num}
            ListHeaderComponent={Header}
            columnWrapperStyle={{
              paddingHorizontal: 12,
            }}
            renderItem={({ item }) => {
              return (
                <PokeCard
                  name={item.name}
                  num={item.num}
                  type={item.type}
                  imageUrl={item.img}
                  empty={item.empty || false}
                  onPress={() => {
                    if (item.empty) {
                      return;
                    }
                    navigation.navigate('Details', item);
                  }}
                />
              );
            }}
          />
        ),
        [createRows, filteredPokemons, pokemons, navigation]
      )}
    </SafeAreaView>
  );
};

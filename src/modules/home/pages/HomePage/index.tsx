import type { PokemonV1 } from '@modules/pokeapi/interfaces/PokemonV1';
import type { NavigationProp, ParamListBase } from '@react-navigation/native';

import React, { useCallback, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { usePokeapi } from '@modules/pokeapi/context';

import { SafeAreaView, FlatList } from 'react-native';
import { Header } from '@modules/home/components/Header';
import { PokeCard } from '@modules/home/components/PokeCard';

export const HomePage: React.FC = () => {
  const COLUMNS_NUMBER = 2;

  const { pokemons } = usePokeapi();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const createRows = useCallback(
    (data: PokemonV1[], columns: number): PokemonV1[] => {
      const rows = Math.floor(data.length / columns);

      let lastRowElements = data.length - rows * columns;

      while (lastRowElements !== columns && lastRowElements !== 0) {
        console.log(data.length);

        data.push({
          empty: true,
          id: lastRowElements,
          name: `empty-${lastRowElements}`,
          num: `empty-${lastRowElements}`,
          img: `empty-${lastRowElements}`,
          type: [],
          height: `empty-${lastRowElements}`,
          weight: `empty-${lastRowElements}`,
          candy: `empty-${lastRowElements}`,
          candy_count: lastRowElements,
          egg: `empty-${lastRowElements}`,
          spawn_chance: lastRowElements,
          avg_spawns: lastRowElements,
          spawn_time: `empty-${lastRowElements}`,
          multipliers: [],
          weaknesses: [],
        });
        lastRowElements += 1;
      }

      return data;
    },
    []
  );

  const list = useMemo(
    () => (
      <FlatList
        data={createRows(pokemons, COLUMNS_NUMBER)}
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
    [createRows, pokemons, navigation]
  );

  return <SafeAreaView>{list}</SafeAreaView>;
};

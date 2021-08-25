import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';

import { PokeCard } from '../PokeCard';

import type { iPOKEMON } from '../../../../@types';

interface iPokeListProps {
  pokemons: iPOKEMON[];
  header: React.ComponentType;
}

export const PokeList: React.FC<iPokeListProps> = ({
  pokemons,
  header,
}: iPokeListProps) => {
  const COLUMNS_NUMBER = 2;

  function createRows(data: iPOKEMON[], columns: number): iPOKEMON[] {
    const rows = Math.floor(data.length / columns);

    let lastRowElements = data.length - rows * columns;

    while (lastRowElements !== columns && lastRowElements !== 0) {
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
  }

  return useMemo(
    () => (
      <FlatList
        data={createRows(pokemons, COLUMNS_NUMBER)}
        numColumns={COLUMNS_NUMBER}
        keyExtractor={(item) => item.num}
        ListHeaderComponent={header}
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
            />
          );
        }}
      />
    ),
    [pokemons, header]
  );
};

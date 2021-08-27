import React from 'react';
import { SafeAreaView } from 'react-native';

import { usePokeapi } from '@contexts/pokeapi';

import { Header } from '@home/components/Header';
import { PokeList } from '@home/components/PokeList';

export const HomePage: React.FC = () => {
  const { pokemons } = usePokeapi();

  return (
    <SafeAreaView>
      <PokeList header={Header} pokemons={pokemons} />
    </SafeAreaView>
  );
};

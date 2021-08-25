import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';

import axios from 'axios';

import AppConstants from '@core/constants';

import { Header } from '@home/components/Header';
import { PokeList } from '@home/components/PokeList';

import type { POKEMON } from '@types';

export const HomePage: React.FC = () => {
  const [pokemons, setPokemons] = useState<POKEMON[]>([]);

  useEffect(() => {
    async function getPokemons(): Promise<void> {
      const response = await axios.get(AppConstants.POKE_API_URL);
      setPokemons(response.data.pokemon);
    }

    getPokemons();
  }, []);

  return (
    <SafeAreaView>
      <PokeList header={Header} pokemons={pokemons} />
    </SafeAreaView>
  );
};

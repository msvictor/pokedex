import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import axios from 'axios';

import type { iPOKEMON } from '../../../../@types';
import AppConstants from '../../../../core/constants';

import { Header } from '../../components/Header';
import { PokeList } from '../../components/PokeList';

export const HomePage: React.FC = () => {
  const [pokemons, setPokemons] = useState<iPOKEMON[]>([]);

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

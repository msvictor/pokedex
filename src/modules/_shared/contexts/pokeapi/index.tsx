import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import AppConstants from '@core/constants';

import type { POKEMON } from '@types';
import type { POKEAPI_POKEMON, POKEAPI_SPECIES } from './types';

interface iPokeapiProps {
  children: ReactNode;
}

interface iPokeapiContextData {
  pokemons: POKEMON[];
  getPokemonInfo: (pokeId: number) => Promise<POKEAPI_POKEMON>;
  getPokemonSpecies: (pokeId: number) => Promise<POKEAPI_SPECIES>;
}

const PokeapiContext = createContext<iPokeapiContextData>(
  {} as iPokeapiContextData
);

export const PokeapiProvider: React.FC<iPokeapiProps> = ({
  children,
}: iPokeapiProps) => {
  const [pokemons, setPokemons] = useState<POKEMON[]>([]);

  const getPokemonInfo = useCallback(
    async (pokeId: number): Promise<POKEAPI_POKEMON> => {
      const response = await axios.get(
        `${AppConstants.POKEAPIV2_POKEMON_URL}/${pokeId}`
      );

      return response.data;
    },
    []
  );

  const getPokemonSpecies = useCallback(
    async (pokeId: number): Promise<POKEAPI_SPECIES> => {
      const response = await axios.get(
        `${AppConstants.POKEAPIV2_SPECIES_URL}/${pokeId}`
      );

      return response.data;
    },
    []
  );

  useEffect(() => {
    async function getPokemons(): Promise<void> {
      const response = await axios.get(AppConstants.POKE_API_URL);
      setPokemons(response.data.pokemon);
    }

    getPokemons();
  }, []);

  return (
    <PokeapiContext.Provider
      value={{
        pokemons,
        getPokemonInfo,
        getPokemonSpecies,
      }}
    >
      {children}
    </PokeapiContext.Provider>
  );
};

export const usePokeapi = (): iPokeapiContextData => useContext(PokeapiContext);

import type { PokemonV1 } from '@modules/pokeapi/infra/interfaces/PokemonV1';

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import GetPokemonsService from '../data/services/GetPokemonsService';

interface iPokeapiContextProps {
  children: ReactNode;
}

interface iPokeapiContextData {
  pokemons: PokemonV1[];
  filteredPokemons: PokemonV1[];
  filterPokemonsByName: (pokeName: string) => void;
}

const PokeapiContext = createContext<iPokeapiContextData>(
  {} as iPokeapiContextData
);

export const PokeapiProvider: React.FC<iPokeapiContextProps> = ({
  children,
}: iPokeapiContextProps) => {
  const [pokemons, setPokemons] = useState<PokemonV1[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonV1[]>([]);

  const filterPokemonsByName = useCallback(
    (pokeName: string) => {
      if (!pokeName) {
        setFilteredPokemons([]);
      }

      setFilteredPokemons(
        pokemons.filter((pokemon) => {
          return pokemon.name.toLowerCase().indexOf(pokeName) > -1;
        })
      );
    },
    [pokemons]
  );

  useEffect(() => {
    async function getPokemons(): Promise<void> {
      const pokes = await GetPokemonsService.execute();

      setPokemons(pokes);
    }

    getPokemons();
  }, []);

  return (
    <PokeapiContext.Provider
      value={{
        pokemons,
        filteredPokemons,
        filterPokemonsByName,
      }}
    >
      {children}
    </PokeapiContext.Provider>
  );
};

export const usePokeapi = (): iPokeapiContextData => useContext(PokeapiContext);

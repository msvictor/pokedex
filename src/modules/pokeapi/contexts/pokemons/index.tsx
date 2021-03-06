import type { PokemonV1 } from '@modules/pokeapi/infra/interfaces/PokemonV1';

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import GetPokemonsService from '@modules/pokeapi/data/services/GetPokemonsService';

interface iPokemonsContextProps {
  children: ReactNode;
}

interface iPokemonsContextData {
  pokemons: PokemonV1[];
  getPokemons: () => void;
  filteredPokemons: PokemonV1[];
  filterPokemonsByName: (pokeName: string) => void;
}

const PokemonsContext = createContext<iPokemonsContextData>(
  {} as iPokemonsContextData
);

export const PokemonsProvider: React.FC<iPokemonsContextProps> = ({
  children,
}: iPokemonsContextProps) => {
  const [pokemons, setPokemons] = useState<PokemonV1[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonV1[]>([]);

  const filterPokemonsByName = useCallback(
    (pokeName: string) => {
      if (!pokeName) {
        setFilteredPokemons([]);
      }

      setFilteredPokemons(
        pokemons.filter((pokemon) => {
          return (
            pokemon.name.toLowerCase().indexOf(pokeName.toLowerCase()) > -1
          );
        })
      );
    },
    [pokemons]
  );

  const getPokemons = useCallback(async () => {
    const pokes = await GetPokemonsService.execute();

    setPokemons(pokes);
  }, []);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        getPokemons,
        filteredPokemons,
        filterPokemonsByName,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export const usePokemons = (): iPokemonsContextData =>
  useContext(PokemonsContext);

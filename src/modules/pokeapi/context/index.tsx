import type { PokemonV1 } from '@modules/pokeapi/interfaces/PokemonV1';

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import GetPokemonsService from '../services/GetPokemonsService';

interface iPokeapiContextProps {
  children: ReactNode;
}

interface iPokeapiContextData {
  pokemons: PokemonV1[];
}

const PokeapiContext = createContext<iPokeapiContextData>(
  {} as iPokeapiContextData
);

export const PokeapiProvider: React.FC<iPokeapiContextProps> = ({
  children,
}: iPokeapiContextProps) => {
  const [pokemons, setPokemons] = useState<PokemonV1[]>([]);

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
      }}
    >
      {children}
    </PokeapiContext.Provider>
  );
};

export const usePokeapi = (): iPokeapiContextData => useContext(PokeapiContext);

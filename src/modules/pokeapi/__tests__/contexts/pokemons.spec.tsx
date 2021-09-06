import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import AppConstants from '@core/AppConstants';
import { renderHook, act } from '@testing-library/react-hooks';
import {
  usePokemons,
  PokemonsProvider,
} from '@modules/pokeapi/contexts/pokemons';

const apiMock = new MockAdapter(axios);

describe('Pokemon context test', () => {
  it('should be able to get a pokemon list', async () => {
    const apiResponse = {
      pokemon: [
        {
          id: 1,
        },
      ],
    };

    apiMock.onGet(AppConstants.POKE_API_URL).reply(200, apiResponse);
    const { result, waitForNextUpdate } = renderHook(() => usePokemons(), {
      wrapper: PokemonsProvider,
    });

    result.current.getPokemons();
    await waitForNextUpdate();
    expect(result.current.pokemons).toHaveLength(1);
  });

  it('should be able to filter a pokemon list', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePokemons(), {
      wrapper: PokemonsProvider,
    });

    act(() => {
      result.current.filterPokemonsByName('bulba');
    });
    await waitForNextUpdate();
    expect(result.current.filteredPokemons).toHaveLength(0);
  });
});

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import AppConstants from '@core/AppConstants';
import GetPokemonInfoService from '@modules/pokeapi/data/services/GetPokemonInfoService';

const apiMock = new MockAdapter(axios);

describe('Get Pokemon Info', () => {
  it('should be able to get pokemon info', async () => {
    const pokeId = 1;
    const apiResponse = {
      id: pokeId,
    };

    apiMock
      .onGet(`${AppConstants.POKEAPIV2_POKEMON_URL}/${pokeId}`)
      .reply(200, apiResponse);

    const pokemon = await GetPokemonInfoService.execute(pokeId);

    expect(pokemon.id).toEqual(pokeId);
  });
});

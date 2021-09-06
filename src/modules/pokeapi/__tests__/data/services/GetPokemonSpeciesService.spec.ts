import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import AppConstants from '@core/AppConstants';
import GetPokemonSpeciesService from '@modules/pokeapi/data/services/GetPokemonSpeciesService';

const apiMock = new MockAdapter(axios);

describe('Get Pokemon Species', () => {
  it('should be able to get pokemon Species', async () => {
    const pokeId = 1;
    const apiResponse = {
      id: pokeId,
    };

    apiMock
      .onGet(`${AppConstants.POKEAPIV2_SPECIES_URL}/${pokeId}`)
      .reply(200, apiResponse);

    const pokemon = await GetPokemonSpeciesService.execute(pokeId);

    expect(pokemon.id).toEqual(pokeId);
  });
});

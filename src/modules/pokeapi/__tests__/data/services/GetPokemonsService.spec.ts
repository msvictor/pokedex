import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import AppConstants from '@core/AppConstants';
import GetPokemonsService from '@modules/pokeapi/data/services/GetPokemonsService';

const apiMock = new MockAdapter(axios);

describe('Get Pokemon Species', () => {
  it('should be able to get pokemons', async () => {
    const apiResponse = {
      pokemon: [
        {
          id: 1,
        },
      ],
    };

    apiMock.onGet(AppConstants.POKE_API_URL).reply(200, apiResponse);
    const pokemon = await GetPokemonsService.execute();

    expect(pokemon).toHaveLength(1);
  });
});

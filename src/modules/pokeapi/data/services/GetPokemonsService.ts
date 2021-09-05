import type { CallRest } from '@infra/interfaces/CallRest';
import type { PokemonV1 } from '@modules/pokeapi/infra/interfaces/PokemonV1';

import AppConstants from '@core/AppConstants';
import RestClientService from '@data/services/RestClientService';

class GetPokemonsService implements CallRest {
  public async execute(): Promise<PokemonV1[]> {
    const pokemons = await RestClientService.get({
      path: AppConstants.POKE_API_URL,
    });

    return pokemons.data.pokemon;
  }
}

export default new GetPokemonsService();

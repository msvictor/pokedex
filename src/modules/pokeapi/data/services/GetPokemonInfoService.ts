import type { CallRest } from '@infra/interfaces/CallRest';
import type { PokemonV2 } from '@modules/pokeapi/infra/interfaces/PokemonV2';

import AppConstants from '@core/AppConstants';
import RestClientService from '@data/services/RestClientService';

class GetPokemonInfoService implements CallRest {
  public async execute(pokeId: number): Promise<PokemonV2> {
    const pokemonInfo = await RestClientService.get({
      path: `${AppConstants.POKEAPIV2_POKEMON_URL}/${pokeId}`,
    });

    return pokemonInfo.data;
  }
}

export default new GetPokemonInfoService();

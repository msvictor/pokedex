import type { CallRest } from '@infra/interfaces/CallRest';
import type { PokemonSpecies } from '@modules/pokeapi/infra/interfaces/PokemonSpecies';

import AppConstants from '@core/AppConstants';
import RestClientService from '@data/services/RestClientService';

class GetPokemonSpeciesService implements CallRest {
  public async execute(pokeId: number): Promise<PokemonSpecies> {
    const pokemonSpecies = await RestClientService.get({
      path: `${AppConstants.POKEAPIV2_SPECIES_URL}/${pokeId}`,
    });

    return pokemonSpecies.data;
  }
}

export default new GetPokemonSpeciesService();

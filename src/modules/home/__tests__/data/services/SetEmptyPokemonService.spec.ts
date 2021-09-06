import SetEmptyPokemonService from '@modules/home/data/services/SetEmptyPokemonService';

describe('Set empty Pokemon ', () => {
  it('should be able to set an empty pokemon', () => {
    const pokemon = SetEmptyPokemonService.execute(1);

    expect(pokemon.empty).not.toBe(undefined);
    expect(pokemon.empty).toBe(true);
  });
});

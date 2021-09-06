import type { PokemonV1 } from '@modules/pokeapi/infra/interfaces/PokemonV1';
import type { PokemonV2 } from '@modules/pokeapi/infra/interfaces/PokemonV2';
import type { PokemonSpecies } from '@modules/pokeapi/infra/interfaces/PokemonSpecies';

import { renderHook, act } from '@testing-library/react-hooks';
import { useSection } from '@modules/details/hooks/useSection';

describe('use section', () => {
  it('should be declared', async () => {
    const { result } = renderHook(() =>
      useSection({
        pokemon: {
          type: ['fire'],
        } as PokemonV1,
        info: {} as PokemonV2,
        species: {} as PokemonSpecies,
      })
    );

    act(() => {
      result.current.handleActiveSection('Stats');
    });

    expect(result.current.ActiveSectionContent).not.toBe(undefined);
    expect(
      result.current.allSections.filter((f) => f.isActive)[0].caption
    ).toBe('Stats');
  });
});

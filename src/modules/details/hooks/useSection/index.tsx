import type { PokemonTypes } from '@infra/interfaces/PokemonTypes';
import type { PokemonV1 } from '@modules/pokeapi/infra/interfaces/PokemonV1';
import type { PokemonV2 } from '@modules/pokeapi/infra/interfaces/PokemonV2';
import type { PokemonSpecies } from '@modules/pokeapi/infra/interfaces/PokemonSpecies';
import type { Section } from '@modules/details/infra/interfaces/Section';
import type { SectionsNames } from '@modules/details/infra/interfaces/SectionsNames';

import React, { Fragment } from 'react';
import DetailsSections from '@modules/details/core/constants/DetailsSections';

import { About } from '@modules/details/components/Sections/About';
import { Stats } from '@modules/details/components/Sections/Stats';
import { Moves } from '@modules/details/components/Sections/Moves';
import { Evolution } from '@modules/details/components/Sections/Evolution';

type UseSectionProps = {
  pokemon: PokemonV1;
  info: PokemonV2;
  species: PokemonSpecies;
};

type UseSectionValues = {
  allSections: Section[];
  ActiveSectionContent: React.FC;
  handleActiveSection: (sectionName: SectionsNames) => void;
};

function sortSections(sections: Section[]): Section[] {
  return sections.sort((a, b) => {
    if (a.caption < b.caption) {
      return -1;
    }
    if (a.caption > b.caption) {
      return 1;
    }
    return 0;
  });
}

export function useSection({
  pokemon,
  info,
  species,
}: UseSectionProps): UseSectionValues {
  const pokemonType = pokemon.type[0].toLowerCase() as PokemonTypes;

  const [allSections, setAllSections] = React.useState<Section[]>(
    sortSections(DetailsSections.SECTIONS)
  );

  const handleActiveSection = (sectionName: SectionsNames): void => {
    const filteredSections = allSections
      .filter((section) => section.caption !== sectionName)
      .map((section) => {
        return { caption: section.caption, isActive: false };
      });

    setAllSections(
      sortSections([
        ...filteredSections,
        { caption: sectionName, isActive: true },
      ])
    );
  };

  const Component = React.useMemo(() => {
    const sections: Record<string, Element> = {
      About: <About pokemon={pokemon} info={info} species={species} />,
      Stats: <Stats stats={info.stats} />,
      Evolution: (
        <Evolution
          num={pokemon.num}
          name={pokemon.name}
          prev={pokemon.prev_evolution}
          next={pokemon.next_evolution}
          type={pokemonType}
        />
      ),
      Moves: <Moves moves={info.moves} />,
    };

    return sections[
      String(allSections.filter((sect) => sect.isActive)[0].caption)
    ];
  }, [pokemon, info, species, allSections, pokemonType]);

  return {
    allSections,
    ActiveSectionContent: () => <Fragment>{Component}</Fragment>,
    handleActiveSection,
  };
}

import React, { Fragment } from 'react';
import DetailsSections from '@details/utils/DetailsSections';

import { About } from '@details/components/Sections/About';
import { Stats } from '@details/components/Sections/Stats';
import { Evolution } from '@details/components/Sections/Evolution';
import { Moves } from '@details/components/Sections/Moves';

import type { POKEMON, POKE_TYPES_NAMES } from '@types';
import type { DETAIL_SECTION, DETAIL_SECTIONS_NAME } from '@details/@types';
import type { POKEAPI_POKEMON, POKEAPI_SPECIES } from '@contexts/pokeapi/types';

type iHandleActiveSectionProps = {
  sectionName: DETAIL_SECTIONS_NAME;
};

type UseSectionProps = {
  pokemon: POKEMON;
  info: POKEAPI_POKEMON;
  species: POKEAPI_SPECIES;
};

type UseSectionValues = {
  allSections: DETAIL_SECTION[];
  ActiveSectionContent: React.FC;
  handleActiveSection: (props: iHandleActiveSectionProps) => void;
};

function sortSections(sections: DETAIL_SECTION[]): DETAIL_SECTION[] {
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
  const [allSections, setAllSections] = React.useState<DETAIL_SECTION[]>(
    sortSections(DetailsSections.SECTIONS)
  );

  const handleActiveSection = ({
    sectionName,
  }: iHandleActiveSectionProps): void => {
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
          prev={pokemon.prev_evolution ?? []}
          next={pokemon.next_evolution ?? []}
          type={pokemon.type[0].toLowerCase() as POKE_TYPES_NAMES}
        />
      ),
      Moves: <Moves moves={info.moves} />,
    };

    return sections[
      String(allSections.filter((sect) => sect.isActive)[0].caption)
    ];
  }, [pokemon, info, species, allSections]);

  return {
    allSections,
    ActiveSectionContent: () => <Fragment>{Component}</Fragment>,
    handleActiveSection,
  };
}

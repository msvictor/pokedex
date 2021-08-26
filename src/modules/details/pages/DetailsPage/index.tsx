import React, { useCallback, useState } from 'react';
import AppColors from '@core/colors';
import { useRoute, useNavigation } from '@react-navigation/native';

import type { DETAIL_SECTION, POKEMON, POKE_TYPES_NAMES } from '@types';

import DetailsSections from '@details/utils/DetailsSections';
import { Header } from '@details/components/Header';
import { PokeImage } from '@details/components/PokeImage';
import { SectionOptions } from '@details/components/SectionOptions';
import { About } from '@modules/details/components/Sections/About';
import { Container, Content, Section } from './styles';

export const DetailsPage: React.FC = () => {
  const { goBack } = useNavigation();
  const { num, name, type, img } = useRoute().params as POKEMON;

  const [sections, setSections] = useState<DETAIL_SECTION[]>(
    DetailsSections.SECTIONS
  );

  const handleMarkAsFavorite = useCallback(() => {
    // do something
  }, []);

  return (
    <Container
      bgColor={AppColors.getColorByTypeName({
        typeName: type[0].toLowerCase() as POKE_TYPES_NAMES,
      })}
    >
      <Header
        num={num}
        name={name}
        type={type}
        goBack={goBack}
        markFav={handleMarkAsFavorite}
      />
      <Content>
        <PokeImage uri={img} />

        <SectionOptions options={sections} />

        <Section>
          <About />
        </Section>
      </Content>
    </Container>
  );
};

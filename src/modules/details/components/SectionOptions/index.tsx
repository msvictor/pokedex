import React from 'react';

import { Container, Option } from './styles';

interface iOption {
  caption: string;
  isActive: boolean;
}

interface iSectionOptionsProps {
  options: iOption[];
}

export const SectionOptions: React.FC<iSectionOptionsProps> = ({
  options,
}: iSectionOptionsProps) => {
  return (
    <Container>
      {options.map(({ caption, isActive }) => (
        <Option key={caption} isActive={isActive}>
          {caption}
        </Option>
      ))}
    </Container>
  );
};

import React from 'react';

import { Image } from './styles';

interface iPokeImageProps {
  uri: string;
}

export const PokeImage: React.FC<iPokeImageProps> = ({
  uri,
}: iPokeImageProps) => {
  return (
    <Image
      source={{ uri }}
      accessibilityValue={{
        text: 'pokeImage',
      }}
    />
  );
};

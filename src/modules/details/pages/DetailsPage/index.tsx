import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import type { POKE_EVOLUTION } from '@types';

export const DetailsPage: React.FC = () => {
  const params = useRoute().params as POKE_EVOLUTION;

  return (
    <View>
      <Text>
        DetailsPage: {params.num} - {params.name}
      </Text>
    </View>
  );
};

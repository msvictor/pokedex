import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomePage } from '../../modules/home/pages';
import { DetailsPage } from '../../modules/details/pages';

import AppColors from '../colors';

const Stack = createNativeStackNavigator();

export const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: AppColors.WHITE,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Details" component={DetailsPage} />
    </Stack.Navigator>
  );
};

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppColors from '@core/colors';

import { HomePage } from '@home/pages/HomePage';
import { DetailsPage } from '@details/pages/DetailsPage';

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

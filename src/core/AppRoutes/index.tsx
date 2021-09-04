import React from 'react';
import AppColors from '@core/AppColors';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from '@modules/home/pages/HomePage';
import { DetailsPage } from '@modules/details/pages/DetailsPage';

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
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

export default AppRoutes;

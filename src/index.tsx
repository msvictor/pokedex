import React from 'react';
import AppColors from '@core/AppColors';
import AppRoutes from '@core/AppRoutes';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PokeapiProvider } from '@modules/pokeapi/context/index';

import 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <PokeapiProvider>
        <StatusBar backgroundColor={AppColors.WHITE} barStyle="dark-content" />
        <AppRoutes />
      </PokeapiProvider>
    </NavigationContainer>
  );
};

export default App;

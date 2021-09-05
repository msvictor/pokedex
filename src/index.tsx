import React from 'react';
import AppColors from '@core/AppColors';
import AppRoutes from '@core/AppRoutes';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PokemonsProvider } from '@modules/pokeapi/contexts/pokemons';

import 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <PokemonsProvider>
        <StatusBar backgroundColor={AppColors.WHITE} barStyle="dark-content" />
        <AppRoutes />
      </PokemonsProvider>
    </NavigationContainer>
  );
};

export default App;

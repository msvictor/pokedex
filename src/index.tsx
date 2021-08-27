import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import AppColors from '@core/colors';

import { Routes } from '@core/routes';
import { PokeapiProvider } from '@contexts/pokeapi';

import 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <PokeapiProvider>
        <StatusBar backgroundColor={AppColors.WHITE} barStyle="dark-content" />
        <Routes />
      </PokeapiProvider>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import AppColors from '@core/colors';

import { Routes } from '@core/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={AppColors.WHITE} barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;

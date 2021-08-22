import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import Header from '../../components/Header';

export const HomePage: React.FC = () => {
  return (
    <SafeAreaView>
      <Header />
      <Text>HomePage</Text>
    </SafeAreaView>
  );
};

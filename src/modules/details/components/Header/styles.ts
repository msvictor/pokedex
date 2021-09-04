import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import AppColors from '@core/AppColors';

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
  padding: 12px 0;
`;

export const RowOptions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const Icon = styled(Feather)`
  color: ${AppColors.WHITE};
  font-size: 18px;
`;

export const PokeNum = styled.Text`
  color: ${AppColors.WHITE};
  font-family: 'Poppins-Bold';
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 34px;
`;

export const PokeName = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 26px;
  color: ${AppColors.WHITE};
`;

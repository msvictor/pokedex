import styled from 'styled-components/native';
import AppColors from '@core/AppColors';

export const Container = styled.View`
  background-color: ${AppColors.WHITE_ALPHA};
  border-radius: 50px;
  padding: 0 8px;
  margin: 2px 4px;
`;

export const Type = styled.Text`
  color: ${AppColors.WHITE};
  font-size: 10px;
  font-family: 'Poppins-SemiBold';
  text-transform: lowercase;
`;

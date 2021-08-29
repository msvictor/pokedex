import AppColors from '@core/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 6px;
`;

export const Label = styled.Text`
  flex: 1;
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  color: ${AppColors.GREY[200]};
  text-transform: capitalize;
`;

export const Caption = styled.Text`
  flex: 2;
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  color: ${AppColors.GREY[400]};
  text-transform: capitalize;
`;

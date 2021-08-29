import styled from 'styled-components/native';
import AppColors from '@core/colors';

export const Container = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 14px;
  margin-top: 8px;
  color: ${AppColors.GREY[400]};
`;

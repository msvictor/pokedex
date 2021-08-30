import AppColors from '@core/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 16px;
`;

export const MoveBox = styled.View.attrs({
  shadowColor: AppColors.GREY[400],
  elevation: 3,
})`
  flex: 1;
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
  background-color: ${AppColors.GREY[50]};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const MoveName = styled.Text`
  color: ${AppColors.GREY[300]};
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  text-transform: capitalize;
`;

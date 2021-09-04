import styled from 'styled-components/native';
import AppColors from '@core/AppColors';
import AppImages from '@core/AppImages';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  position: relative;
  background-color: ${AppColors.RED};
  height: ${height * 0.45}px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  justify-content: flex-end;
  padding: 15px 20px;
`;

export const PokeBall = styled.Image.attrs({
  source: AppImages.BLACK_POKEBALL,
})`
  position: absolute;
  top: -39px;
  right: -39px;

  height: ${width * 0.4}px;
  width: ${width * 0.4}px;
  opacity: 0.4;
`;

export const Title = styled.Text`
  color: ${AppColors.WHITE};
  font-family: 'Poppins-SemiBold';
  font-size: 30px;
  text-align: left;
`;

import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import AppColors from '../../../../core/colors';
import AppImages from '../../../../core/images';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  position: relative;
  background-color: ${AppColors.RED};
  max-height: 40%;
  height: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  justify-content: flex-end;
  padding: 15px 30px;
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
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 30px;
  text-align: left;
`;

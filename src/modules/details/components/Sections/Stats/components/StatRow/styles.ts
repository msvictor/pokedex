import AppColors from '@core/colors';
import AppConstants from '@core/constants';
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

export const StatValueContainer = styled.View`
  flex: 2;
  flex-direction: row;
  align-items: center;
  padding-left: 9px;
`;

export const StatValue = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  color: ${AppColors.GREY[400]};
  width: 25px;

  text-transform: capitalize;
`;

export const StatValueBar = styled.View`
  position: relative;
  flex: 1;
  width: 100%;
  height: 2px;
  margin-left: 9px;
  background: ${AppColors.GREY[100]};
`;

interface iStatValueBarProgressProps {
  statValue: number;
}

export const StatValueBarProgress = styled.View<iStatValueBarProgressProps>`
  width: ${(props) =>
    (props.statValue * 100) / AppConstants.BIGGEST_POKE_BASE_STAT}%;
  height: 100%;
  background-color: ${AppColors.GREEN};
`;

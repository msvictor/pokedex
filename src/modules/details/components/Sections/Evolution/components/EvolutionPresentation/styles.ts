import styled from 'styled-components/native';
import AppColors from '@core/colors';

interface iPokeImageProps {
  bgColor: string;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const PokeImage = styled.Image<iPokeImageProps>`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: ${(props) => props.bgColor};
  border-width: 1px;
  border-color: ${AppColors.GREY[400]};
`;

export const PokeName = styled.Text`
  color: ${AppColors.GREY[400]};
  font-family: 'Poppins-SemiBold';
`;

import styled from 'styled-components/native';
import AppColors from '../../../../core/colors';
import AppImages from '../../../../core/images';

interface iContainerProps {
  bgColor: string;
}

export const Container = styled.View<iContainerProps>`
  flex: 1;
  flex-basis: 0;
  padding: 16px;
  border-radius: 12px;
  background-color: ${(props) => props.bgColor};
  margin: 4px;
  min-height: 120px;
`;

export const Identification = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.Text`
  font-family: 'Poppins-Bold';
  color: ${AppColors.WHITE};
`;

export const Num = styled.Text`
  font-family: 'Poppins-Light';
  color: ${AppColors.WHITE};
  font-size: 12px;
`;

export const Pokemon = styled.View`
  flex: 1;
  height: 60px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Type = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;

export const Thumbnail = styled.View`
  flex: 1;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const PokeImage = styled.Image`
  position: absolute;
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const PokeBall = styled.Image.attrs({
  source: AppImages.WHITE_POKEBALL,
})`
  position: absolute;
  flex: 1;
  height: 100%;
  width: 100%;
  opacity: 0.2;
`;

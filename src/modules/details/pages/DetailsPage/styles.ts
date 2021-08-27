import AppColors from '@core/colors';
import styled from 'styled-components/native';

interface iContainerProps {
  bgColor: string;
}

export const Container = styled.View<iContainerProps>`
  flex: 1;
  background-color: ${(props) => props.bgColor};
`;

export const Content = styled.View`
  background-color: ${AppColors.WHITE};
  height: 55%;
  margin-top: auto;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  flex-direction: column;
  position: relative;
  padding: 36px 24px 0;
`;

export const Section = styled.View`
  flex: 1;
`;

interface iLoaderProps {
  color: string;
}

export const Loader = styled.ActivityIndicator.attrs({
  size: 36,
})<iLoaderProps>`
  color: ${(props) => props.color};
  margin-top: auto;
  margin-bottom: auto;
`;

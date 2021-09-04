import styled, { css } from 'styled-components/native';
import AppColors from '@core/AppColors';

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

export const SectionOptions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${AppColors.GREY[100]};
`;

interface iOptionProps {
  isActive: boolean;
}
export const Option = styled.Text<iOptionProps>`
  padding: 8px 0;
  font-family: 'Poppins-SemiBold';

  ${(props) =>
    props.isActive
      ? css`
          color: ${AppColors.GREY[400]};
          border-bottom-width: 1px;
          border-style: solid;
          border-color: ${AppColors.BLUE};
        `
      : css`
          color: ${AppColors.GREY[100]};
        `}
`;

export const SectionContent = styled.View`
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

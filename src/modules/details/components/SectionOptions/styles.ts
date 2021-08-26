import AppColors from '@core/colors';
import styled, { css } from 'styled-components/native';

interface iOptionProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${AppColors.GREY[100]};
`;

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

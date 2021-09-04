import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import AppColors from '@core/AppColors';

export const Container = styled.View`
  background-color: ${AppColors.WHITE};
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  flex-direction: row;
`;

export const Icon = styled(Feather)`
  color: ${AppColors.GREY[300]};
  margin: 0;
  padding: 0;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: AppColors.GREY[300],
})`
  flex: 1;
  margin-left: 6px;
  padding: 0;
  color: ${AppColors.GREY[300]};
  font-family: 'Poppins-Regular';
  font-size: 15px;
`;

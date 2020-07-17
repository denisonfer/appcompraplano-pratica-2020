import styled from 'styled-components/native';

import { normalize } from '../../util';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: ${normalize(16) + 'px'};
  color: #222;
  margin-bottom: 8px;

`;

export const Item = styled.View`
  width: 100%;
  margin-bottom: 20px;

  align-items: center;
`;

export const BtnComprar = styled.TouchableOpacity`
  background: #725ac1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 5px 15px;
  z-index: 2;

`;

export const TxtBtn = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: ${normalize(16) + 'px'};
  color: #fff;

`;




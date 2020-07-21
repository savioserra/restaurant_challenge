import styled from 'styled-components/native';
import {lightGrey} from '../../colors';

export const CardContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${lightGrey};
  border-radius: 10px;

  ${({size = 100}) => `
    width: ${size}px;
    height: ${size}px;
  `}
`;

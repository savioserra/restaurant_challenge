import styled from 'styled-components/native';
import {lightGrey} from '../../colors';

export const BarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  height: 60px;
  width: 100%;

  border-top-width: 1px;
  border-top-color: ${lightGrey};

  background-color: #fff;
`;

export const TabBarTile = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

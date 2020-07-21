import {Dimensions, Platform} from 'react-native';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {red, lightGrey} from '../../colors';

export const HeaderContainer = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 20px 0px 60px 0px;
  background-color: ${red};
`;

export const SessionHeader = styled.Text`
  ${({weight}) => weight && `font-weight: ${weight}`};

  font-family: Comfortaa-Bold;
  font-size: ${({size}) => size || 26}px;

  color: ${({color}) => color || 'black'};
`;

export const IconContainer = styled.View`
  display: flex;

  width: 15%;
  align-items: center;
`;

export const HeaderTextSession = styled.View`
  width: 70%;
  padding: 0px 10px;
`;

export const SearchContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 80%;
  height: 58px;

  padding: 4px 24px;
  bottom: -29px;
  left: ${Dimensions.get('screen').width * 0.1}px;
  border-radius: 6px;
  position: absolute;

  background-color: ${lightGrey};

  ${Platform.select({
    android: 'elevation: 3;',
    ios: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 4px 0px;',
  })}
`;

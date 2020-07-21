import styled, {css} from 'styled-components/native';
import {Platform} from 'react-native';

const headerSizing = css`
  width: 100%;
  height: 320px;
`;

export const HeaderContainer = styled.ImageBackground`
  ${headerSizing}
`;

export const Overlay = styled.View`
  ${headerSizing}

  border-bottom-right-radius: 30px;
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
`;

export const DishTitle = styled.Text`
  font-family: Comfortaa-Bold;
  font-size: 36px;
  color: #fff;

  position: absolute;
  bottom: 30px;
  left: 20px;
`;

export const DishDescription = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const FavoriteButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;

  position: absolute;
  top: 290px;
  right: 30px;

  border-radius: 30px;
  background-color: #fff;

  justify-content: center;
  align-items: center;

  ${Platform.select({
    android: 'elevation: 3;',
    ios: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 4px 0px;',
  })}
`;

export const DescriptionText = styled.Text`
  font-family: Comfortaa-Regular;
  font-size: 36px;
`;

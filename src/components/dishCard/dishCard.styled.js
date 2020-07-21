import styled from 'styled-components/native';
import {lightGrey, orange, darkGrey, green} from '../../colors';

export const CardContainer = styled.TouchableOpacity`
  height: 160px;
  width: 100%;

  border-radius: 10px;
  flex-direction: row;
  background-color: ${lightGrey};
`;

export const DishPicture = styled.Image`
  background-color: ${orange};

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  height: 160px;
  width: 160px;
`;

export const DescriptionContainer = styled.View`
  display: flex;
  flex-shrink: 1;
  justify-content: space-between;

  padding: 14px 20px;
`;

export const DishTitle = styled.Text`
  font-size: 20px;
  font-family: Comfortaa-Bold;
  flex-wrap: wrap;
  color: ${darkGrey};
`;

export const DishDescription = styled(DishTitle)`
  font-size: 12px;
`;

export const DishPrice = styled(DishTitle)`
  color: ${green};
  font-size: 26px;
`;

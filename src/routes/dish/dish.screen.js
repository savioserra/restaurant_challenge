import React, {useState} from 'react';
import {HeaderContainer, Overlay, DishTitle, FavoriteButton, DishDescription, DescriptionText} from './dish.styled';
import Icon from 'react-native-ionicons';
import {red} from '../../colors';

const LoreIpsum = () => (
  <DescriptionText style={{fontSize: 14}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </DescriptionText>
);

export const DishScreen = ({route, navigation}) => {
  const {dish} = route.params;

  const [favorited, setFavorited] = useState(false);

  return (
    <>
      <HeaderContainer source={{uri: dish.imageUrl}} imageStyle={{borderBottomRightRadius: 30}}>
        <Overlay />
        <DishTitle>{dish.name}</DishTitle>
      </HeaderContainer>

      <DishDescription contentContainerStyle={{padding: 20, paddingTop: 44}}>
        <DescriptionText>{dish.description}</DescriptionText>
        <LoreIpsum />
        <LoreIpsum />
        <LoreIpsum />
        <LoreIpsum />
      </DishDescription>

      <FavoriteButton activeOpacity={1} onPress={() => setFavorited((state) => !state)}>
        <Icon name={favorited ? 'heart' : 'heart-empty'} color={red} />
      </FavoriteButton>
    </>
  );
};

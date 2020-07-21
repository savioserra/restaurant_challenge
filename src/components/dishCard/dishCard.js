import React from 'react';
import {
  CardContainer,
  DishPicture,
  DescriptionContainer,
  DishTitle,
  DishDescription,
  DishPrice,
} from './dishCard.styled';

export const DishCard = ({dish, onPress}) => {
  return (
    <CardContainer onPress={onPress} activeOpacity={0.8}>
      <DishPicture source={{uri: dish.imageUrl}} />

      <DescriptionContainer>
        <DishTitle>{dish.name}</DishTitle>
        <DishDescription>{dish.description}</DishDescription>
        <DishPrice>R$ {dish.price}</DishPrice>
      </DescriptionContainer>
    </CardContainer>
  );
};

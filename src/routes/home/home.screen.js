import React from 'react';
import Icon from 'react-native-ionicons';
import {FlatList} from 'react-native-gesture-handler';
import {View, TextInput, ScrollView, StyleSheet, Dimensions} from 'react-native';

import {orange, grey, darkGrey} from '../../colors';
import {CategoryCard} from '../../components/categoryCard/categoryCard';

import {HeaderContainer, SessionHeader, IconContainer, HeaderTextSession, SearchContainer} from './home.styled';
import {DishCard} from '../../components/dishCard/dishCard';

const categoriesMock = [
  {displayName: 'Bebidas', icon: 'beer'},
  {displayName: 'Pizzas', icon: 'pizza'},
  {displayName: 'Destaques', icon: 'flame'},
];

const dishesMock = [
  {
    name: 'Ao Molho',
    imageUrl:
      'https://thumbor.thedailymeal.com/LYFmeQejm31rQhLIgZjp0YZYEgI=/870x565/https://www.thedailymeal.com/sites/default/files/slideshows/1952820/2121750/20-tetrazzini.JPG',
    description: 'Macarrão ao molho branco, fughi e cheiro verde das montanhas.',
    price: 19.9,
  },
  {
    name: 'Veggie',
    imageUrl:
      'https://www.scholastic.com/content/dam/parents/OptimizedDesignImages/Batch16/Articles/5-international-soup-recipes-article-4-3.jpg',
    description: 'Macarrão com pimentãom ervilha e ervas finas colhidas no himalaia.',
    price: 19.9,
  },
  {
    name: 'Veggie 2nd',
    imageUrl:
      'https://thumbor.thedailymeal.com/P39JYYy17I_xFrOKmVShafYAPOY=//https://www.thedailymeal.com/sites/default/files/2018/05/15/Hero_SOuthern%20Dishes_Slide_Edit.jpg',
    description: 'Macarrão com pimentãom ervilha e ervas finas colhidas no himalaia.',
    price: 19.9,
  },
];

const categoriesShown = 2;
const cardSize = 160;

export const HomeScreen = ({navigation}) => {
  const {width: deviceWidth} = Dimensions.get('screen');

  // This represents the exact space needed between cards to display
  // categoriesShown number of cards and a half of another one.
  const spaceBetweenCards =
    (deviceWidth - (categoriesShown + 0.5) * cardSize - styles.rightPadding.paddingRight) / categoriesShown;

  return (
    <>
      <View style={styles.foreground}>
        <HeaderContainer>
          <IconContainer>
            <Icon name="restaurant" size={36} color={orange} />
          </IconContainer>

          <HeaderTextSession>
            <SessionHeader color="white">GoRestaurant</SessionHeader>
            <SessionHeader color="white" size={16}>
              Comida Italiana, sim.
            </SessionHeader>
          </HeaderTextSession>

          <IconContainer>
            <Icon name="exit" size={36} color={orange} />
          </IconContainer>
        </HeaderContainer>

        <SearchContainer>
          <Icon name="search" size={28} color={grey} />
          <TextInput placeholder="Qual comida você procura?" />
        </SearchContainer>
      </View>

      <ScrollView bounces contentContainerStyle={{paddingVertical: 59}}>
        <SessionHeader style={styles.sessionText} color={darkGrey}>
          Categorias
        </SessionHeader>

        <FlatList
          horizontal
          data={categoriesMock}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(it) => it.displayName}
          ItemSeparatorComponent={() => <View style={{width: spaceBetweenCards}} />}
          contentContainerStyle={[styles.leftPadding, styles.rightPadding, styles.defaultBottomMargin]}
          renderItem={({item}) => (
            <CategoryCard
              size={cardSize}
              icon={item.icon}
              label={item.displayName}
              onPress={() => navigation.push('Placeholder', {text: item.displayName})}
            />
          )}
        />

        <SessionHeader style={styles.sessionText} color={darkGrey}>
          Pratos
        </SessionHeader>

        {dishesMock.map((item, idx) => (
          <View style={[styles.rightPadding, styles.leftPadding]} key={item.name}>
            <DishCard dish={item} onPress={() => navigation.push('Detail', {dish: item})} />
            {idx + 1 < dishesMock.length && <View style={{height: spaceBetweenCards}} />}
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  leftPadding: {paddingLeft: 20},
  rightPadding: {paddingRight: 20},
  defaultBottomMargin: {marginBottom: 26},
  sessionText: {marginBottom: 10, paddingLeft: 20},
  foreground: {zIndex: 1},
});

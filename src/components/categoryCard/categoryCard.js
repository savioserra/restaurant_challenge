import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {red} from '../../colors';
import Icon from 'react-native-ionicons';
import {CardContainer} from './categoryCard.styled';

export const CategoryCard = ({size = 100, icon, label, onPress = () => {}}) => {
  return (
    <CardContainer onPress={onPress} activeOpacity={0.8} size={size}>
      <Icon name={icon} size={46} color={red} />
      <Text style={styles.label}>{label}</Text>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  defaultRadius: {borderRadius: 10},
  label: {fontFamily: 'Comfortaa-Bold', fontSize: 18, color: red, marginTop: 6},
});

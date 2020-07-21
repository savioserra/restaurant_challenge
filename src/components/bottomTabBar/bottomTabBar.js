import React, {memo} from 'react';
import {Text, StyleSheet} from 'react-native';
import {BarContainer, TabBarTile} from './bottomTabBar.styled';
import Icon from 'react-native-ionicons';
import {red, darkGrey} from '../../colors';

export const BottomTabBar = memo(({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <BarContainer>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;
        const icon = options.tabBarIcon;
        const isFocused = state.index === index;
        const color = isFocused ? red : darkGrey;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => navigation.emit({type: 'tabLongPress', target: route.key});

        return (
          <TabBarTile onPress={onPress} onLongPress={onLongPress} key={route.key} activeOpacity={0.8}>
            <Icon name={icon} size={26} color={color} />
            <Text style={[styles.label, {color}]}>{label}</Text>
          </TabBarTile>
        );
      })}
    </BarContainer>
  );
});

const styles = StyleSheet.create({
  label: {fontSize: 16, marginLeft: 10, fontFamily: 'Comfortaa-Bold'},
});

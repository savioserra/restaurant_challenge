import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from './home.screen';
import {PlaceholderScreen} from '../placeholder/placeholder.screen';
import {DishScreen} from '../dish/dish.screen';

const HomeStack = createStackNavigator();

export const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{header: () => <></>}} />
    <HomeStack.Screen name="Placeholder" component={PlaceholderScreen} options={{header: () => <></>}} />
    <HomeStack.Screen name="Detail" component={DishScreen} options={{header: () => <></>}} />
  </HomeStack.Navigator>
);

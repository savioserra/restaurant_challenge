import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeStackNavigator} from './routes/home/home.navigator';
import {BottomTabBar} from './components/bottomTabBar/bottomTabBar';
import {PlaceholderScreen} from './routes/placeholder/placeholder.screen';
import {orange, green} from './colors';

const Tab = createBottomTabNavigator();

const OrangePlaceholderScreen = (props) => <PlaceholderScreen {...props} color={orange} placeholderText="Pedidos" />;
const GreenPlaceholderScreen = (props) => <PlaceholderScreen {...props} color={green} placeholderText="Favoritos" />;

export const App = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" animated translucent />

      <SafeAreaProvider>
        <NavigationContainer theme={{...DefaultTheme, colors: {...DefaultTheme.colors, background: '#fff'}}}>
          <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
            <Tab.Screen name="Listagem" options={{tabBarIcon: 'menu'}} component={HomeStackNavigator} />
            <Tab.Screen name="Pedidos" options={{tabBarIcon: 'basket'}} component={OrangePlaceholderScreen} />
            <Tab.Screen name="Favoritos" options={{tabBarIcon: 'heart-empty'}} component={GreenPlaceholderScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

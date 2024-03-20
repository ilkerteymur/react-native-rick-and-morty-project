import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screens/characters';
import Locations from '../screens/locations';
import Episodes from '../screens/episodes';
import {CHARACTERS, EPISODES, LOCATIONS} from '../utils/routes';
import {People, Location, Book1} from 'iconsax-react-native';
import {AppColors} from '../theme/colors';
import {screenWrapper} from '../styles/screenWrapper.js';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: screenWrapper.headerStyle,
        tabBarStyle: screenWrapper.tabBarStyle,
        headerTintColor: AppColors.WHITE,
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case CHARACTERS:
              return (
                <People
                  size={size}
                  color={color}
                  variant={focused ? 'Bold' : 'Outline'}
                />
              );
            case LOCATIONS:
              return (
                <Location
                  size={size}
                  color={color}
                  variant={focused ? 'Bold' : 'Outline'}
                />
              );
            case EPISODES:
              return (
                <Book1
                  size={size}
                  color={color}
                  variant={focused ? 'Bold' : 'Outline'}
                />
              );
          }
        },
        tabBarActiveTintColor: AppColors.WHITE,
        tabBarInactiveTintColor: AppColors.GRAY,
      })}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={EPISODES} component={Episodes} />
    </Tab.Navigator>
  );
}

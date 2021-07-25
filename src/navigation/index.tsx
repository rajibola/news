import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {Home, ViewNews} from '../screens';
import {RootStackParamList} from '../types/types';

const options: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ViewNews" component={ViewNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

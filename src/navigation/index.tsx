import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {Home, ViewNews} from '../screens';

const options: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

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

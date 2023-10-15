import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';

const Stack = createStackNavigator();
const HomeRouting = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeRouting;

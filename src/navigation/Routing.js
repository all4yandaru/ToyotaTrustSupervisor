import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthRouting from './AuthRouting';
import MainRouting from './MainRouting';

const Stack = createNativeStackNavigator();
const Routing = () => {
  console.log('Routing');
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="AuthRouting">
        <Stack.Screen name="AuthRouting" component={AuthRouting} />
        <Stack.Screen name="MainRouting" component={MainRouting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;

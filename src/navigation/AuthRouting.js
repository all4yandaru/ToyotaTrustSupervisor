import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/login/Login';

const Stack = createStackNavigator();
const AuthRouting = () => {
  console.log('AuthRouting');
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthRouting;

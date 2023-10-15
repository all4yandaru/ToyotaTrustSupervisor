import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Insentif from '../screen/Insentif';

const Stack = createStackNavigator();
const InsentifRouting = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="InsentifScreen">
      <Stack.Screen name="InsentifScreen" component={Insentif} />
    </Stack.Navigator>
  );
};

export default InsentifRouting;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Insentif from '../screen/Insentif';
import DetailInsentif from '../screen/DetailInsentif';

const Stack = createStackNavigator();
const InsentifRouting = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="InsentifScreen">
      <Stack.Screen name="InsentifScreen" component={Insentif} />
      <Stack.Screen name="DetailInsentif" component={DetailInsentif} />
    </Stack.Navigator>
  );
};

export default InsentifRouting;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Riwayat from '../screen/Riwayat';

const Stack = createStackNavigator();
const RiwayatRouting = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="RiwayatScreen">
      <Stack.Screen name="RiwayatScreen" component={Riwayat} />
    </Stack.Navigator>
  );
};

export default RiwayatRouting;

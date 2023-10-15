import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profil from '../screen/Profil';

const Stack = createStackNavigator();
const ProfilRouting = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ProfilScreen">
      <Stack.Screen name="ProfilScreen" component={Profil} />
    </Stack.Navigator>
  );
};

export default ProfilRouting;

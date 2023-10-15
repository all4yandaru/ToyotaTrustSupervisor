import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tracking from '../screen/Tracking';

const Stack = createStackNavigator();
const TrackingRouting = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TrackingScreen">
      <Stack.Screen name="TrackingScreen" component={Tracking} />
    </Stack.Navigator>
  );
};

export default TrackingRouting;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tracking from '../screen/Tracking';
import ToolsTradeIn from '../component/section/homeAndTracking/ToolsTradeInComponent';

const Stack = createStackNavigator();
const TrackingRouting = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TrackingScreen">
      <Stack.Screen name="TrackingScreen" component={Tracking} />
      <Stack.Screen name="ToolsTradeIn" component={ToolsTradeIn} />
    </Stack.Navigator>
  );
};

export default TrackingRouting;

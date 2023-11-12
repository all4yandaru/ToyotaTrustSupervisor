import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tracking from '../screen/homeAndTracking/Tracking';
import ToolsTradeIn from '../screen/homeAndTracking/ToolsTradeIn';
import DetailAppraisal from '../screen/homeAndTracking/DetailAppraisal';
import BeliMobil from '../screen/homeAndTracking/BeliMobilUi';

const Stack = createStackNavigator();
const TrackingRouting = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TrackingScreen">
      <Stack.Screen name="TrackingScreen" component={Tracking} />
      <Stack.Screen name="ToolsTradeIn" component={ToolsTradeIn} />
      <Stack.Screen name="BeliMobil" component={BeliMobil} />
      <Stack.Screen name="DetailAppraisal" component={DetailAppraisal} />
    </Stack.Navigator>
  );
};

export default TrackingRouting;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tracking from '../screen/Tracking';
import ToolsTradeIn from '../screen/ToolsTradeIn';
import DetailAppraisal from '../screen/DetailAppraisal';
import BeliMobil from '../screen/BeliMobilUi';

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

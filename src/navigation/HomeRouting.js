import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/homeAndTracking/Home';
import ToolTradeIn from '../screen/homeAndTracking/ToolsTradeIn';
import DetailAppraisal from '../screen/homeAndTracking/DetailAppraisal';
import NotificationHome from '../screen/homeAndTracking/Notification';

const Stack = createStackNavigator();
const HomeRouting = ({navigation, route}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="ToolTradeIn" component={ToolTradeIn} />
      <Stack.Screen name="DetailAppraisal" component={DetailAppraisal} />
      <Stack.Screen name="Notification" component={NotificationHome} />
    </Stack.Navigator>
  );
};

export default HomeRouting;

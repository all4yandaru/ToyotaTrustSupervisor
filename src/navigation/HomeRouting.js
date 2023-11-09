import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import ToolTradeIn from '../screen/ToolsTradeIn';
import DetailAppraisal from '../screen/DetailAppraisal';
import NotificationHome from '../screen/Notification';

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

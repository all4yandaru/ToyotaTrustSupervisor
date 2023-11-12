import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Riwayat from '../screen/riwayat/Riwayat';
import SummaryDetailTradeIn from '../component/section/riwayat/SummaryTradeInDetail';
import SummaryTradeIn from '../component/section/riwayat/SummaryTradeIn';
import SummaryNewCar from '../component/section/riwayat/SummaryNewCar';

const Stack = createStackNavigator();
const RiwayatRouting = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="RiwayatScreen">
      <Stack.Screen name="RiwayatScreen" component={Riwayat} />
      <Stack.Screen name="SummaryTradeIn" component={SummaryTradeIn} />
      <Stack.Screen name="SummaryNewCar" component={SummaryNewCar} />
      <Stack.Screen name="DetailTradeIn" component={SummaryDetailTradeIn} />
    </Stack.Navigator>
  );
};

export default RiwayatRouting;

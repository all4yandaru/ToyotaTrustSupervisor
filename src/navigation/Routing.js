import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthRouting from './AuthRouting';
import MainRouting from './MainRouting';
import HomeRouting from './HomeRouting';
import TrackingRouting from './TrackingRouting';
import RiwayatRouting from './RiwayatRouting';
import InsentifRouting from './InsentifRouting';
import ProfilRouting from './ProfilRouting';

const Stack = createNativeStackNavigator();
const Routing = () => {
  console.log('Routing');
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="AuthRouting">
        <Stack.Screen name="AuthRouting" component={AuthRouting} />
        <Stack.Screen name="MainRouting" component={MainRouting} />

        {/* Sub Routing */}
        <Stack.Screen name="HomeRouting" component={HomeRouting} />
        <Stack.Screen name="TrackingRouting" component={TrackingRouting} />
        <Stack.Screen name="RiwayatRouting" component={RiwayatRouting} />
        <Stack.Screen name="InsentifRouting" component={InsentifRouting} />
        <Stack.Screen name="ProfilRouting" component={ProfilRouting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;

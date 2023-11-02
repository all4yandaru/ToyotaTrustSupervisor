import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeRouting from './HomeRouting';
import MyTabBar from './MyTabBar';
import TrackingRouting from './TrackingRouting';
import RiwayatRouting from './RiwayatRouting';
import InsentifRouting from './InsentifRouting';
import ProfilRouting from './ProfilRouting';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const MainRouting = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeRouting} />
      <Tab.Screen name="Tracking" component={TrackingRouting} />
      <Tab.Screen name="Riwayat" component={RiwayatRouting} />
      <Tab.Screen name="Insentif" component={InsentifRouting} />
      <Tab.Screen name="Profil" component={ProfilRouting} />
    </Tab.Navigator>
  );
};

export default MainRouting;

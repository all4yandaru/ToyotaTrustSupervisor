import {Text, View} from 'react-native';
import React, {Component} from 'react';
import NotificationComponent from '../component/section/homeAndTracking/NotificationComponent';

const NotificationHome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <NotificationComponent navigation={navigation} />
    </View>
  );
};

export default NotificationHome;

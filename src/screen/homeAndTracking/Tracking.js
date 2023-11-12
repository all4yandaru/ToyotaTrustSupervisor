import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TrackingComponent from '../../component/section/homeAndTracking/TrackingComponent';

const Tracking = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <TrackingComponent navigation={navigation} />
    </View>
  );
};

export default Tracking;

import {Text, View} from 'react-native';
import React, {Component} from 'react';
import BeliMobilComponent from '../component/section/homeAndTracking/BeliMobilUiApprovedComponent';

const BeliMobil = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BeliMobilComponent navigation={navigation} />
    </View>
  );
};

export default BeliMobil;

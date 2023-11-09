import {Text, View} from 'react-native';
import React, {Component} from 'react';
import SummaryNewCarComponent from '../component/section/profil/SummaryNewCarComponent';

const SummaryNewCar = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <SummaryNewCarComponent navigation={navigation} />
    </View>
  );
};

export default SummaryNewCar;

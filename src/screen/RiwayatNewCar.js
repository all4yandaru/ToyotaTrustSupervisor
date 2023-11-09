import {Text, View} from 'react-native';
import React, {Component} from 'react';
import RiwayatNewCarComponent from '../component/section/profil/RiwayatNewCarComponent';

const RiwayatNewCar = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <RiwayatNewCarComponent navigation={navigation} />
    </View>
  );
};

export default RiwayatNewCar;

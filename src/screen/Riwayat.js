import React, {Component} from 'react';
import {Text, View} from 'react-native';
import RiwayatComponent from '../component/section/riwayat/RiwayatComponent';

const Riwayat = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <RiwayatComponent navigation={navigation} />
    </View>
  );
};

export default Riwayat;

import {Text, View} from 'react-native';
import React, {Component} from 'react';
import RiwayatTradeInComponent from '../component/section/profil/RiwayatTradeInComponent';

const RiwayatTradeIn = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <RiwayatTradeInComponent navigation={navigation} />
    </View>
  );
};

export default RiwayatTradeIn;

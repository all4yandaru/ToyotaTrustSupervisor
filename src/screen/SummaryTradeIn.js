import {Text, View} from 'react-native';
import React, {Component} from 'react';
import SummaryTradeInComponent from '../component/section/profil/SummaryTradeInComponent';

const SummaryTradeIn = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <SummaryTradeInComponent navigation={navigation} />
    </View>
  );
};

export default SummaryTradeIn;

import {Text, View} from 'react-native';
import React, {Component} from 'react';
import SummaryTradeInDetailComponent from '../component/section/profil/SummaryTradeInDetailComponent';

const SummaryTradeInDetail = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <SummaryTradeInDetailComponent navigation={navigation} />
    </View>
  );
};

export default SummaryTradeInDetail;

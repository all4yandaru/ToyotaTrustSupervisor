import {Text, View} from 'react-native';
import React, {Component} from 'react';
import ToolsTradeInComponent from '../../component/section/homeAndTracking/ToolsTradeInComponent';

const ToolsTradeIn = ({navigation, route}) => {
  console.log('params: ', route.params);
  return (
    <View style={{flex: 1}}>
      <ToolsTradeInComponent navigation={navigation} />
    </View>
  );
};

export default ToolsTradeIn;

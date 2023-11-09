import React, {Component} from 'react';
import {Text, View} from 'react-native';
import InsentifComponent from '../component/section/insentif/InsentifComponent';

const Insentif = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <InsentifComponent navigation={navigation} />
    </View>
  );
};

export default Insentif;

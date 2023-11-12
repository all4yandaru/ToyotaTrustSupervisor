import {Text, View} from 'react-native';
import React, {Component} from 'react';
import DetailInsentifComponent from '../../component/section/insentif/DetailInsentifComponent';

const DetailInsentif = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <DetailInsentifComponent navigation={navigation} />
    </View>
  );
};

export default DetailInsentif;

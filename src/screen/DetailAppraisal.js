import {Text, View} from 'react-native';
import React, {Component} from 'react';
import DetailAppraisalComponent from '../component/section/homeAndTracking/DetailAppraisalComponent';

const DetailAppraisal = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <DetailAppraisalComponent navigation={navigation} />
    </View>
  );
};

export default DetailAppraisal;

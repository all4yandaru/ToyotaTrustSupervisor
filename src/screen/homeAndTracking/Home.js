import {Text, View} from 'react-native';
import React, {Component} from 'react';
import HomeComponent from '../../component/section/homeAndTracking/HomeComponent';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HomeComponent navigation={navigation} />
    </View>
  );
};

export default Home;

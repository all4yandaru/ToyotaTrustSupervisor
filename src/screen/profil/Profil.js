import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ProfilComponent from '../../component/section/profil/ProfilComponent';

const Profil = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <ProfilComponent navigation={navigation} />
    </View>
  );
};

export default Profil;

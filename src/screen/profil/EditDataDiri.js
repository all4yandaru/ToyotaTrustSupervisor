import {Text, View} from 'react-native';
import React, {Component} from 'react';
import EditDataDiriComponent from '../../component/section/profil/EditDataDiriComponent';

const EditDataDiri = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <EditDataDiriComponent navigation={navigation} />
    </View>
  );
};

export default EditDataDiri;

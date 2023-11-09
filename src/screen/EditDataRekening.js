import {Text, View} from 'react-native';
import React, {Component} from 'react';
import EditDataRekeningComponent from '../component/section/profil/EditDataRekeningComponent';

const EditDataRekening = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <EditDataRekeningComponent navigation={navigation} />
    </View>
  );
};

export default EditDataRekening;

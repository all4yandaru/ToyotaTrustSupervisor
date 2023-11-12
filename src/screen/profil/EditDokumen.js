import {Text, View} from 'react-native';
import React, {Component} from 'react';
import EditDokumenComponent from '../../component/section/profil/EditDokumenComponent';

const EditDokumen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <EditDokumenComponent navigation={navigation} />
    </View>
  );
};

export default EditDokumen;

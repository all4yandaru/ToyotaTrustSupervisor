import {Text, View} from 'react-native';
import React, {Component} from 'react';
import CekHargaKendaraanComponent from '../../component/section/profil/CekHargaKendaraanComponent';

const CekHargaKendaraan = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <CekHargaKendaraanComponent navigation={navigation} />
    </View>
  );
};

export default CekHargaKendaraan;

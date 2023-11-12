import {Text, View} from 'react-native';
import React, {Component} from 'react';
import HasilCekHargaComponent from '../../component/section/profil/HasilCekHargaComponent';

const HasilCekHarga = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HasilCekHargaComponent navigation={navigation} />
    </View>
  );
};

export default HasilCekHarga;

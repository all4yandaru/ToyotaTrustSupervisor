import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import RiwayatComponent from '../../component/section/riwayat/RiwayatComponent';
import riwayatHelper from '../../apiManagement/riwayatHelper';
import {useIsFocused} from '@react-navigation/native';

const Riwayat = ({navigation, route}) => {
  const isFocused = useIsFocused();
  const {session} = useSelector(state => state.session);
  const {account} = useSelector(state => state.account);

  const [riwayatTradeIn, setRiwayatTradeIn] = useState(null);
  const [riwayatNewCar, setRiwayatNewCar] = useState(null);

  useEffect(() => {
    if (session.token && account) {
      setTradeInProcess();
      setNewCarProcess();
    } else {
      navigation.replace('AuthRouting');
    }
  }, [isFocused]);

  const setTradeInProcess = async () => {
    const response = await riwayatHelper.RiwayatTradeIn(session.token);
    setRiwayatTradeIn(response);
  };

  const setNewCarProcess = async () => {
    const response = await riwayatHelper.RiwayatNewCar(session.token);
    setRiwayatNewCar(response);
  };

  // console.log('Riwayat');
  return (
    <View style={{flex: 1}}>
      <RiwayatComponent
        navigation={navigation}
        newCarParams={riwayatNewCar}
        tradeInParams={riwayatTradeIn}
      />
    </View>
  );
};

export default Riwayat;

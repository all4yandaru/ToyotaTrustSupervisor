import React, {Component, useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import TrackingComponent from '../../component/section/homeAndTracking/TrackingComponent';
import {useSelector} from 'react-redux';
import trackingHelper from '../../apiManagement/trackingHelper';
import {useIsFocused} from '@react-navigation/native';

const Tracking = ({navigation, route}) => {
  const {session} = useSelector(state => state.session);
  const {account} = useSelector(state => state.account);
  const [dataTradeIn, setDataTradeIn] = useState(null);
  const [dataNewCar, setDataNewCar] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (session.token && account) {
      setTradeInProcess();
      setNewCarProcess();
    } else {
      navigation.replace('AuthRouting');
    }
  }, [isFocused]);

  const setTradeInProcess = async () => {
    const response = await trackingHelper.tradeInHelper(session.token);
    setDataTradeIn(response);
  };

  const setNewCarProcess = async () => {
    const response = await trackingHelper.newCarHelper(session.token);
    setDataNewCar(response);
  };

  return (
    <View style={{flex: 1}}>
      {dataTradeIn && dataNewCar && (
        <TrackingComponent
          navigation={navigation}
          dataTradeIn={dataTradeIn}
          dataNewCar={dataNewCar}
        />
      )}
    </View>
  );
};

export default Tracking;

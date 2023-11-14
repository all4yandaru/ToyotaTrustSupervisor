import React, {Component, useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import TrackingComponent from '../../component/section/homeAndTracking/TrackingComponent';
import {useSelector} from 'react-redux';
import trackingHelper from '../../apiManagement/trackingHelper';
import {useIsFocused} from '@react-navigation/native';

const Tracking = ({navigation, route}) => {
  const {session} = useSelector(state => state.session);
  const {account} = useSelector(state => state.account);
  const {dataTradeIn, setDataTradeIn} = useState([]);
  const {dataNewCar, setDataNewCar} = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    setTimeout(() => {
      if (session.token && account) {
        setTradeInProcess();
        setNewCarProcess();
      } else {
        navigation.replace('AuthRouting');
      }
    }, 1000);
  });

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
      <TrackingComponent
        navigation={navigation}
        dataTradeIn={dataTradeIn}
        dataNewCar={dataNewCar}
      />
    </View>
  );
};

export default Tracking;

import {Text, View} from 'react-native';
import React, {Component} from 'react';
import HomeComponent from '../../component/section/homeAndTracking/HomeComponent';
import homeHelper from '../../apiManagement/homeHelper';
import {useState} from 'react';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation}) => {
  const {session} = useSelector(state => state.session);
  const {account} = useSelector(state => state.account);
  const [dashboards, setdashboards] = useState(null);
  const [tradeIn, settradeIn] = useState(null);
  const [newCars, setnewCars] = useState(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (session.token && account) {
      DashboardData();
      TradeInData();
      NewCarData();
    }
  }, [isFocused]);

  const DashboardData = async () => {
    const res = await homeHelper.dashboards(session.token);
    setdashboards(res);
  };
  const TradeInData = async () => {
    const res = await homeHelper.tradeIn(session.token);
    settradeIn(res);
  };
  const NewCarData = async () => {
    const res = await homeHelper.newCar(session.token);
    setnewCars(res);
    console.log(res);
  };

  return (
    <View style={{flex: 1}}>
      {dashboards && tradeIn && newCars && (
        <HomeComponent
          navigation={navigation}
          dashboardData={dashboards}
          tradeInData={tradeIn}
          newCarData={newCars}
        />
      )}
    </View>
  );
};

export default Home;

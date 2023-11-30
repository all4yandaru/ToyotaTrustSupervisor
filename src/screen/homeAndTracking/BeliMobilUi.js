import {Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import BeliMobilComponent from '../../component/section/homeAndTracking/BeliMobilUiApprovedComponent';
import {useIsFocused} from '@react-navigation/native';
import homeHelper from '../../apiManagement/homeHelper';
import {useSelector} from 'react-redux';

const BeliMobil = ({navigation, route}) => {
  const {session} = useSelector(state => state.session);
  const [beliMobilData, setBeliMobilData] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (route.params) {
      BeliMobilDataProcess();
    }
  }, [isFocused]);

  const BeliMobilDataProcess = async () => {
    const res = await homeHelper.beliMobil(session.token, route.params.id);
    setBeliMobilData(res);
  };

  return (
    <View style={{flex: 1}}>
      {beliMobilData && (
        <BeliMobilComponent
          navigation={navigation}
          beliMobilData={beliMobilData}
          route={route}
        />
      )}
    </View>
  );
};

export default BeliMobil;

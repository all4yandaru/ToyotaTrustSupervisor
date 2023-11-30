import {Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import DetailAppraisalComponent from '../../component/section/homeAndTracking/DetailAppraisalComponent';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import homeHelper from '../../apiManagement/homeHelper';

const DetailAppraisal = ({navigation, route}) => {
  const {session} = useSelector(state => state.session);
  const [detailAppraisalData, setDetailAppraisalData] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (route.params) {
      if (route.params.from == 'home') {
        DetailAppraisalHomeProcess();
      } else {
        DetailAppraisalTrackProcess();
      }
    }
  }, [isFocused]);

  const DetailAppraisalHomeProcess = async () => {
    const res = await homeHelper.detailAppraisal(
      session.token,
      route.params.item.id,
    );
    setDetailAppraisalData(res);
  };

  const DetailAppraisalTrackProcess = async () => {
    const res = await homeHelper.detailAppraisal(
      session.token,
      route.params.approvalTradeIn.id,
    );
    setDetailAppraisalData(res);
  };

  return (
    <View style={{flex: 1}}>
      {detailAppraisalData && (
        <DetailAppraisalComponent
          navigation={navigation}
          detailAppraisalData={detailAppraisalData}
        />
      )}
    </View>
  );
};

export default DetailAppraisal;

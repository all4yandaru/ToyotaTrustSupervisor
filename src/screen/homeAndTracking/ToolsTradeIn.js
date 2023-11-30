import {Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import ToolsTradeInComponent from '../../component/section/homeAndTracking/ToolsTradeInComponent';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import homeHelper from '../../apiManagement/homeHelper';

const ToolsTradeIn = ({navigation, route}) => {
  console.log('params: ', route.params);
  const {session} = useSelector(state => state.session);
  const [toolsTradeInData, setToolsTradeInData] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (route.params) {
      if (route.params.from == 'home') {
        ToolsTradeInHomeProcess();
      } else {
        ToolsTradeInTrackProcess();
      }
    }
  }, [isFocused]);

  const ToolsTradeInHomeProcess = async () => {
    const res = await homeHelper.tradeInDetail(
      session.token,
      route.params.item.id,
    );
    setToolsTradeInData(res);
  };

  const ToolsTradeInTrackProcess = async () => {
    const res = await homeHelper.tradeInDetail(
      session.token,
      route.params.item.ApprovalTradeIn.id,
    );
    setToolsTradeInData(res);
  };

  return (
    <View style={{flex: 1}}>
      {toolsTradeInData && (
        <ToolsTradeInComponent
          toolsTradeInData={toolsTradeInData}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default ToolsTradeIn;

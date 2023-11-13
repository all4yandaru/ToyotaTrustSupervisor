import React, {Component} from 'react';
import {Text, View} from 'react-native';
import InsentifComponent from '../../component/section/insentif/InsentifComponent';
import {useState} from 'react';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import insentifHelper from '../../apiManagement/insentifHelper';

const Insentif = ({navigation, route}) => {
  const {session} = useSelector(state => state.session);
  const {account} = useSelector(state => state.account);
  const [insentifData, setInsentifData] = useState();

  useEffect(() => {
    setTimeout(() => {
      if (session.token && account) {
        setInsentifDataProces();
      } else {
        navigation.replace('AuthRouting');
      }
    }, 1000);
  });

  const setInsentifDataProces = async () => {
    const response = await insentifHelper.insentifHelper(session.token);
    console.log(response);
  };

  return (
    <View style={{flex: 1}}>
      <InsentifComponent navigation={navigation} />
    </View>
  );
};

export default Insentif;

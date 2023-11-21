import React, {Component, useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import ProfilComponent from '../../component/section/profil/ProfilComponent';
import profilHelper from '../../apiManagement/profilHelper';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

const Profil = ({navigation, route}) => {
  const {session} = useSelector(state => state.session);
  const {account} = useSelector(state => state.account);
  const [profilData, setProfilData] = useState({});

  const IsFocused = useIsFocused();

  useEffect(() => {
    console.log('asd rofil');
    if (session.token && account) {
      console.log('token: ', session.token);
      console.log('account: ', account);
      setProfilDataProcess();
    } else {
      navigation.replace('AuthRouting');
    }
  }, [IsFocused]);

  const setProfilDataProcess = async () => {
    const response = await profilHelper.profilHelper(session.token, account.id);
    setProfilData(response);
    console.log('response: ', response);
  };

  return (
    <View style={{flex: 1}}>
      {profilData.code == 200 ? (
        <ProfilComponent profilData={profilData} navigation={navigation} />
      ) : null}
    </View>
  );
};

export default Profil;

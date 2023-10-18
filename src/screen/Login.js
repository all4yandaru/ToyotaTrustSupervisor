import {Text, View} from 'react-native';
import React, {Component} from 'react';
import LoginComponent from '../component/section/login/LoginComponent';

const Login = () => {
  console.log('Login');
  return (
    <View style={{flex: 1}}>
      <LoginComponent />
    </View>
  );
};

export default Login;

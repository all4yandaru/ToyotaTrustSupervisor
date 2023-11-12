import {Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import LoginComponent from '../../component/section/login/LoginComponent';
import {useDispatch, useSelector} from 'react-redux';
import sessionHelper from '../../apiManagement/sessionHelper';

const Login = ({navigation, route}) => {
  const {session} = useSelector(state => state.session);
  const {account} = useSelector(state => state.account);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (session.token && account) {
        navigation.replace('MainRouting');
      } else {
        console.log('login gagal');
        setShowLogin(true);
      }
    }, 1000);
  });

  const checkLoginSession = async () => {
    const res = await sessionHelper.loginSession({
      email: email,
      password: password,
    });

    console.log('login res: ', res);

    if (res.code === 200) {
      const user = res.user;
      const token = res.token;

      dispatch({type: 'SESSION_ADD_DATA', data: token});
      dispatch({type: 'ACC_ADD_DATA', data: user});

      navigation.replace('MainRouting');
    } else {
      console.log('login failed');
    }
  };

  return (
    <View style={{flex: 1}}>
      {showLogin && (
        <LoginComponent
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          loginSession={checkLoginSession}
        />
      )}
    </View>
  );
};

export default Login;

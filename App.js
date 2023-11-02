import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Routing from './src/navigation/Routing';
import MainRouting from './src/navigation/MainRouting';

const App = () => {
  console.log('App');
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <MainRouting />
    </SafeAreaView>
  );
};

export default App;

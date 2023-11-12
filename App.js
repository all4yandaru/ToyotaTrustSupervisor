import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Routing from './src/navigation/Routing';
import {Provider} from 'react-redux';
import {persistor, store} from './src/stateManagement/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  console.log('App');
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle="light-content" />
          <Routing />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;

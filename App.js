import React, {useState, useEffect} from 'react';
import mainRoutingStack from "./src/routing/routing";
import {Provider} from "react-redux";
import {SafeAreaView, StatusBar} from 'react-native';

import configureStore from "./src/config/redux-configuration/store/store";
import { enableScreens, shouldUseActivityState } from 'react-native-screens';
import { loadAssets } from './src/config/static-data/loadstaticAssets';
import { logcaptureMessageSentry } from './src/config/sentry/sentry';
// logcaptureMessageSentry('Sentry ready...');
enableScreens();

const store = configureStore();

export default function App() {

  useEffect(()=>{
    loadAssets().then((data) => {
      // console.log('loadAssets after promise resolve  :  ', data);
    }).catch(err => {
      console.log('loadAssets after promise reject  :  ', err);
    })
  }, []);


  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        {mainRoutingStack()}
      </SafeAreaView>
    </Provider>
  ) 
}


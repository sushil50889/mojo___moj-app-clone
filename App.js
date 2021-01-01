import React, {useState, useEffect} from 'react';
import mainRoutingStack from "./src/routing/routing";
import {Provider} from "react-redux";

import configureStore from "./src/config/redux-configuration/store/store";
import { enableScreens, shouldUseActivityState } from 'react-native-screens';
import { loadAssets } from './src/config/static-data/loadstaticAssets';
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
      {mainRoutingStack()}
    </Provider>
  ) 
}


import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { loadFonts } from '../config/static-data/loadFonts';
import mainStackScreens from './authenticatedUserStack';
// asyncStore.clearAllStorage();

  
function mainRoutingStack() {

  const [isAppLoading, setisAppLoading] = useState(true);

  if (isAppLoading) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => { setisAppLoading(false) }} onError={console.warn}/>
    )
  }

  return (
      <NavigationContainer>
        {mainStackScreens()}
      </NavigationContainer>
  )
}
  
export default mainRoutingStack;


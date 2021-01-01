import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/userScreens/home';
import ProfileScreen from '../screens/userScreens/profile';
import CameraScreen from '../screens/userScreens/camera';
import LoginScreen from '../screens/authScreens/login';
import SearchScreen from '../screens/userScreens/search';
import NotificationScreen from '../screens/userScreens/notification';
import {tabBarOption, screenoption} from '../config/tab-bar-navigation-options/tabBarOptions';
// asyncStore.clearAllStorage();

const mainStack = createStackNavigator();
const camStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function camStackScreens() {
  return (
      <camStack.Navigator initialRouteName="camera" screenOptions={{headerShown: false}}>
        <camStack.Screen name="camera" component={CameraScreen}/>        
      </camStack.Navigator>
  );
}


function authenticatedUserTabStack() {
  return (
    <Tab.Navigator initialRouteName="homepage" tabBarOptions={tabBarOption} screenOptions={({ route, navigation }) => (screenoption(navigation, route))}>
      <Tab.Screen name="homepage" component={HomeScreen}/>
      <Tab.Screen name="searchpage" component={SearchScreen}/>
      <Tab.Screen name="camerapage" component={camStackScreens} options={{unmountOnBlur: true, tabBarVisible: false}}/>
      <Tab.Screen name="notificationpage" component={NotificationScreen}/>
      <Tab.Screen name="profilepage" component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

    
function mainStackScreens() {
    return (
        <mainStack.Navigator initialRouteName="bottomTabStack" screenOptions={{headerShown: false}}>
          <mainStack.Screen name="bottomTabStack" component={authenticatedUserTabStack}/>
          <mainStack.Screen name="loginpage" component={LoginScreen}/>        
        </mainStack.Navigator>
    );
} 



export default mainStackScreens;
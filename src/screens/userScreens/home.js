import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, ScrollView, BackHandler, Alert, SafeAreaView } from 'react-native';
import { fonts } from '../../config/static-data/fonts';
import {connect} from 'react-redux';
import { windowWidth, windowHeight } from '../../config/static-data/screenWidthHeight';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {statusBarHeight} from '../../config/statusbar/statusbar';

 const HomeScreen = (props) => {

  const { navigation, route, tokenDispatch } = props;
  const [isFontLoaded, setisFontLoaded] = useState(false);


  useEffect(()=> {
    
    Font.loadAsync({
      epiloguevariable: require('../../../assets/fonts/Epilogue/Epilogue-VariableFont_wght.ttf')
    }).then(() => {
      setisFontLoaded(true);
    }).catch(err => {
      console.log('loadAsync HomeScreen    : ', err);
    }); 


    setTimeout(() => {
      if (Constants.isDevice) {
        Permissions.getAsync(Permissions.CAMERA).then(async (camPer) => {
          if (camPer.status !== 'granted'){
            Permissions.askAsync(Permissions.CAMERA).then((status) => {
              if(status.status !== 'granted'){                
              }else{                
              }
            }).catch(err => {              
            });            
          }
        }).catch(err=>{
          
        });        
      }      
    }, 1000);

    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit the app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      backHandler.remove();
    }
    
  }, []);
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={{fontFamily: isFontLoaded ? fonts.epiloguevariable : null, color: '#fff'}}>Welcome to Home Screen</Text>
        <StatusBar style='light' animated={true} />
      </View>
    </SafeAreaView>
  )

}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: statusBarHeight
  },
  loginButton: {
    width: '80%',
    marginVertical: 4,
  }
});




const mapStateToProps = (state) => {
  return {
    // userData: state.indexReducer.userData,
    pushtoken: state.indexReducer.pushtoken,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tokenDispatch: (payload) => dispatch(setPushTokenData(payload)), 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
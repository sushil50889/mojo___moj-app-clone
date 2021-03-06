import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, LogBox } from 'react-native';
import normalizeFontSize from '../../config/static-data/dynamicFontSize';
import { fonts } from '../../config/static-data/fonts';
import { windowWidth, windowHeight } from '../../config/static-data/screenWidthHeight';
import statusBarHeight from '../../config/statusbar/statusbar';
import {connect} from 'react-redux';
import { setPushTokenData, setPostsListData } from '../../config/redux-configuration/actions';
import NotificationHeader from '../../components/notificationHeader';
import NotificationList from '../../components/notificationList';
import { notificationDummyData } from '../../config/static-data/dummyData';


const NotificationScreen = (props)=> {

  const {postslist, postDispatch} = props;

  useEffect(()=>{
    stopPlayAllVideo(); 
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);  
  }, [])

  const stopPlayAllVideo = () => {
    console.log('stop play all...');
      let newArr = postslist.map((item, index)=>{
          item.play = false;
          return item;        
      })
  
      if(newArr && newArr.length == postslist.length){
        postDispatch(newArr);
      }         
  }


  return (
    <View style={styles.container}>
      <NotificationHeader/>
      <ScrollView>   
        <NotificationList notiData={notificationDummyData}/>     
      </ScrollView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});



const mapStateToProps = (state) => {
  return {
    // userData: state.indexReducer.userData,
    pushtoken: state.indexReducer.pushtoken,
    postslist: state.indexReducer.postsList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tokenDispatch: (payload) => dispatch(setPushTokenData(payload)), 
    postDispatch: (payload) => dispatch(setPostsListData(payload)), 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreen);
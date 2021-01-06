import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normalizeFontSize from '../../config/static-data/dynamicFontSize';
import { fonts } from '../../config/static-data/fonts';
import { windowWidth, windowHeight } from '../../config/static-data/screenWidthHeight';
import statusBarHeight from '../../config/statusbar/statusbar';
import {connect} from 'react-redux';
import { setPushTokenData, setPostsListData } from '../../config/redux-configuration/actions';


const SearchScreen = (props)=>{

  const {postslist, postDispatch} = props;

  useEffect(()=>{
    stopPlayAllVideo();   
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
      <Text>Welcome to Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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


export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
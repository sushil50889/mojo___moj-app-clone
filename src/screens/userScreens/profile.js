import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normalizeFontSize from '../../config/static-data/dynamicFontSize';
import { fonts } from '../../config/static-data/fonts';
import { windowWidth, windowHeight } from '../../config/static-data/screenWidthHeight';
import statusBarHeight from '../../config/statusbar/statusbar';
import {connect} from 'react-redux';
import { setPushTokenData, setPostsListData } from '../../config/redux-configuration/actions';
import ProfilePageHeader from '../../components/profilePageHeader';
import ProfilePageUserInfo from '../../components/profile/profilePageUserInfo';
import ProfilePageUserBio from '../../components/profile/profilePageUserBio';
import { ButtonTypeTwo } from '../../components/buttons/button';
import ProfilePageTabView from '../../components/profile/profilePageTabView';



const ProfileScreen = (props) => {

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

  const onEditProfilePress = ()=>{
    console.log('on Edit Profile Press');
  }

  return (
    <View style={styles.container}>
      <ProfilePageHeader/>
      <ProfilePageUserInfo/>
      <ProfilePageUserBio/>
      <View style={{paddingHorizontal: 15}}>
        <ButtonTypeTwo text={'Edit Profile'} onpress={onEditProfilePress} buttonstyle={styles.editBtn} buttonTextStyle={styles.editBtnText}/>
      </View> 
      <View style={{flex: 1}}>
        <ProfilePageTabView/>
      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  editBtn: {
    height: windowHeight * 0.05,
    borderRadius: 10,  
    backgroundColor: "#333236",
  },
  editBtnText: {
    color: 'white',
    flex: 1,
    // textTransform: 'uppercase',
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    // fontFamily: fonts.epiloguevariable
}
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


export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
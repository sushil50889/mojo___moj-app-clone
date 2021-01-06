// eslint-disable-next-line linebreak-style
import React, { useState, useEffect, useRef } from 'react';
import {
 StyleSheet, View, BackHandler, Alert, Animated
} from 'react-native';
import {connect} from 'react-redux';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import { windowHeight } from '../../config/static-data/screenWidthHeight';
import statusBarHeight from '../../config/statusbar/statusbar';
import permission from '../../config/permission/device-permissions';
import { MOJO_VIDEO_POST } from '../../config/static-data/dummyData';
import Post from '../../components/post';
import { setPushTokenData, setPostsListData } from '../../config/redux-configuration/actions';
const FLATLIST_HEIGHT = windowHeight-windowHeight*0.065;


const HomeScreen = (props) => {

  const {postslist, postDispatch} = props;
  const [isFontLoaded, setisFontLoaded] = useState(false);
  const [currentIndex, setcurrentIndex] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;


  useEffect(()=> {

    setPostForPlay(0);
    
    Font.loadAsync({
      epiloguevariable: require('../../../assets/fonts/Epilogue/Epilogue-VariableFont_wght.ttf')
    }).then(() => {
      setisFontLoaded(true);
    }).catch(err => {
      console.log('loadAsync HomeScreen    : ', err);
    }); 


    setTimeout(async () => {
      // if (Constants.isDevice) {
      //   let camPer = await permission.getCameraPermission(); 
      //   if(camPer && camPer.status){

      //   }else{

      //   }
      // }      
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
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      backHandler.remove();
    }
    
  }, []);



  const setPostForPlay = (newIndex) => {
    if(newIndex >= 0){
      let newArr = MOJO_VIDEO_POST.map((item, index)=>{
        if(index == newIndex){
          item.play = true;
          return item;
        }else{
          item.play = false;
          return item;
        }
      })
  
      if(newArr && newArr.length == MOJO_VIDEO_POST.length){
        console.log('new array length ', newArr.length);
        postDispatch(newArr);
        setcurrentIndex(newIndex);
      }      
    }else{
      // console.log('new index not found');
    }    
  }
  

  return (
      <View style={styles.container}>
          <Animated.FlatList
          data={postslist}
          extraData={currentIndex}
          renderItem={({item}) => <Post post={item}/>}
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
          snapToInterval={FLATLIST_HEIGHT}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          bounces={false}
          horizontal={false}
          pagingEnabled
          removeClippedSubviews={true}
          initialScrollIndex={0}
          onEndReachedThreshold={0.5}
          getItemLayout={(data, index) => ({
                length: FLATLIST_HEIGHT,
                offset: FLATLIST_HEIGHT * index,
                index,
          })}
          onScroll={
            Animated.event(
                [{
                    nativeEvent: {contentOffset: {y: scrollY}}
                }],
                {useNativeDriver: false}
            )
          }
          onMomentumScrollEnd={(ev) => {
            const newIndex = Math.round(ev.nativeEvent.contentOffset.y / FLATLIST_HEIGHT);
            console.log('scroll ended newIndex  :   ', newIndex);
            setPostForPlay(newIndex);
          }}
          onEndReached={(distanceFromEnd) => {
            console.log('distanceFromEnd   :   ', distanceFromEnd);
          }}
          />
      </View>
  )

}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
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


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
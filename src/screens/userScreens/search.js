import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import normalizeFontSize from '../../config/static-data/dynamicFontSize';
import { fonts } from '../../config/static-data/fonts';
import { windowWidth, windowHeight } from '../../config/static-data/screenWidthHeight';
import statusBarHeight from '../../config/statusbar/statusbar';
import {connect} from 'react-redux';
import { setPushTokenData, setPostsListData } from '../../config/redux-configuration/actions';
import { carouselDummyData, trendingChannelCardImages } from '../../config/static-data/dummyData';
import Carousel from '../../components/carousel';
import SearchBar from '../../components/searchBar';
import TopTrendingChannelList from '../../components/topTrendingChannelList';


const SearchScreen = (props)=>{

  const {postslist, postDispatch} = props;
  const [term, setTerm] = useState('');


// */-----------------------------------------------------------------------------------------*/
// */----  Calling use effect for initial data modification  ----*/
// */-----------------------------------------------------------------------------------------*/
  useEffect(()=>{
    // stop playing all videos
    stopPlayAllVideo();   
  }, [])


// */-----------------------------------------------------------------------------------------*/
// */----  stop playing all video function declaration ----*/
// */-----------------------------------------------------------------------------------------*/
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


// */-----------------------------------------------------------------------------------------*/
// */----  after search submit this function will call ----*/
// */-----------------------------------------------------------------------------------------*/
  function searchApi(term){
    console.log('logging term  :  ', term);
  }


  const dataOne = trendingChannelCardImages.sort( () => Math.random() - 0.5);
  const dataTwo = dataOne.sort( () => Math.random() - 0.5);
  const dataThree = dataTwo.sort( () => Math.random() - 0.5);



// */-----------------------------------------------------------------------------------------*/
// */----  returning the component view  ----*/
// */-----------------------------------------------------------------------------------------*/
  return (
    <View style={styles.container}>
      <ScrollView>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Carousel data = {carouselDummyData}/>   
      <View style={{marginTop: 20}}>  
      <TopTrendingChannelList results={dataOne} title="Tribute To AR Rehman"/>
      <TopTrendingChannelList results={dataTwo} title="IndVsUSA"/>
      <TopTrendingChannelList results={dataThree} title="NewYearNewMe"/>
      </View> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
});



// */-----------------------------------------------------------------------------------------*/
// */----  map redux state to props function  ----*/
// */-----------------------------------------------------------------------------------------*/
const mapStateToProps = (state) => {
  return {
    // userData: state.indexReducer.userData,
    pushtoken: state.indexReducer.pushtoken,
    postslist: state.indexReducer.postsList,
  }
}


// */-----------------------------------------------------------------------------------------*/
// */----  map dispatch functions to props  ----*/
// */-----------------------------------------------------------------------------------------*/
const mapDispatchToProps = (dispatch) => {
  return {
    tokenDispatch: (payload) => dispatch(setPushTokenData(payload)), 
    postDispatch: (payload) => dispatch(setPostsListData(payload)), 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);







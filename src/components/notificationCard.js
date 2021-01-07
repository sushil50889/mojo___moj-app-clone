import React from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { windowWidth, windowHeight } from '../config/static-data/screenWidthHeight';

const NotificationCard = (props) => {

  const {notiCardData} = props;

  return (
    <FlatList
    horizontal={false}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    data={notiCardData.data}
    keyExtractor={item => item.id+notiCardData.id}
    renderItem={({ item }) => {
      return (
        <TouchableOpacity onPress={() => null } style={{marginTop: 4}}>
          <View style={styles.container}>
              <View style={{width: '20%', padding: 15}}><Image source={{uri: item.logo}} style={{width: '100%', height: '100%', borderRadius: 15}}/></View> 

              <View style={{width: '60%', padding: 10, justifyContent: 'center'}}>
                  <Text style={{color: '#dedede'}}>{item.title}</Text>
                  <Text style={{color: '#dedede'}}>{item.weekday} {item.time}</Text>
              </View> 

              <View style={{width: '20%'}}><Image source={{uri: item.image}}  style={{width: '100%', height: '100%'}} resizeMode={'cover'}/></View>              
          </View>
        </TouchableOpacity>
      );
    }}
  />
    
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    borderColor: '#fff',
    width: windowWidth,
    height: windowHeight*0.1,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  
});

export default NotificationCard;
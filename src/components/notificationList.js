import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { windowWidth } from '../config/static-data/screenWidthHeight';
import NotificationCard from './notificationCard';

const NotificationList = (props) => {

  const {notiData} = props;   

  return (
    <View style={styles.container}>   
      { notiData.map((item)=>{ return (<View key={item.id} style={{marginTop: 15}}><Text style={{color: '#919191', paddingLeft: windowWidth*0.06}}>{item.date}</Text><NotificationCard notiCardData={item}/></View>)})}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#a1a1a1',
    textAlignVertical: 'center',
    paddingLeft: 10
  },
  views: {
    fontSize: 12,
    fontWeight: 'bold',
    // marginBottom: 5,
    color: '#a1a1a1',
    // backgroundColor: 'green',
    textAlignVertical: 'center'
  },
  container: {
    marginBottom: 15
  }
});

export default NotificationList;
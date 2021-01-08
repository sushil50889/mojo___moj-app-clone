import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { windowWidth, windowHeight } from '../config/static-data/screenWidthHeight';
import { SimpleLineIcons } from '@expo/vector-icons'; 



export default function ProfilePageHeader() {
  return (
    <View style={styles.container}>
      {/* <Text style={{color: '#e8e8e8', textAlignVertical: 'center', fontSize: 24}}>Notifications</Text> */}
      <SimpleLineIcons name="options-vertical" size={24} color="#e8e8e8" style={{color: '#e8e8e8', textAlignVertical: 'center', }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: windowWidth,
    height: windowHeight*0.08,
    justifyContent: 'center',
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    paddingHorizontal: 15
  }
});
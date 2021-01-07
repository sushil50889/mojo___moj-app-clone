import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { windowWidth } from '../config/static-data/screenWidthHeight';
import TopTrendingChannelListCard from './topTrendingChannelListCard';
import { Feather } from '@expo/vector-icons';

const TopTrendingChannelList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: windowWidth, paddingHorizontal: 15}}>        
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}}>
            <Feather name="hash" size={24} color="#a1a1a1" style={{paddingHorizontal: 8, paddingVertical: 5, borderWidth: 1, borderColor: "#a1a1a1", borderRadius: 6, backgroundColor: '#25232d', }}/>
            <Text style={[styles.title]}>{title}</Text>
        </View>           
        <Text style={styles.views}>37.2M</Text>
      </View>  
      
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        style={{marginLeft: 10, marginTop: 8}}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => null }>
              <TopTrendingChannelListCard result={item} />
            </TouchableOpacity>
          );
        }}
      />
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
    marginBottom: 5,
    color: '#a1a1a1',
    // backgroundColor: 'green',
    textAlignVertical: 'center'
  },
  container: {
    marginBottom: 15
  }
});

export default TopTrendingChannelList;
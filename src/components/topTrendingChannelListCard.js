import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { windowWidth, windowHeight } from '../config/static-data/screenWidthHeight';

const TopTrendingChannelListCard = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} resizeMode="cover"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 5
  },
  image: {
    width: windowWidth*0.45,
    height: windowHeight*0.27,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 13
  },
  review: {
    fontSize: 12
  },
});

export default TopTrendingChannelListCard;
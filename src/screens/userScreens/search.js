import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normalizeFontSize from '../../config/static-data/dynamicFontSize';
import { fonts } from '../../config/static-data/fonts';
import { windowWidth, windowHeight } from '../../config/static-data/screenWidthHeight';
import statusBarHeight from '../../config/statusbar/statusbar';

export default function SearchScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Search Screen</Text>
      <StatusBar style="auto" />
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
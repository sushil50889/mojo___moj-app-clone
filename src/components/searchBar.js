import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import statusBarHeight from '../config/statusbar/statusbar';
import { windowWidth } from '../config/static-data/screenWidthHeight';
import normalizeFontSize from '../config/static-data/dynamicFontSize';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search Users, Hashtags"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        placeholderTextColor='#737278'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#25232d',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 10
  },
  inputStyle: {
    // flex: 1,
    width: windowWidth*0.8,
    fontSize: normalizeFontSize(15),
    color: '#737278'
  },
  iconStyle: {
    fontSize: normalizeFontSize(25),
    alignSelf: 'center',
    marginHorizontal: 15,
    color: '#737278'
  }
});

export default SearchBar;
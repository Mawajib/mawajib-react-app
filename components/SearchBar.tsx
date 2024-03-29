import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
  <>
      <View style={styles.header}>
      <Icon name="arrow-left" size={15} color="black" styles={styles.searchIcon}/>
      <Text style={{padding:10, color:'black'}}>Home</Text>
      </View>
    <View style={styles.searchBarContainer}>
    <Icon name="search" size={20} color="#681F2A" styles={styles.searchIcon}/>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for services"
      />
    </View>
  </>
  );
};

const styles = StyleSheet.create({
header:{
flexDirection:'row',
alignItems:'center',
margin: 10,
},
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal:25,
    borderRadius: 50,
    height:50
  },
  searchIcon: {
    marginx: 10,
  },
  searchInput: {
    flex: 1,
  },
});

export default SearchBar;

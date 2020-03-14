import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onChange, onSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name='search' style={styles.icon} />
      <TextInput
        autoCapitalize='none'
        style={styles.search}
        placeholder='Search image'
        placeholderTextColor='#A4A1A1'
        value={term}
        onChangeText={onChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#bbbbbb',
    borderRadius: 6,
    alignItems: 'center'
  },
  icon: {
    fontSize: 30,
    marginRight: 7
  },
  search: {
    flex: 1,
    fontSize: 30
  }
});

export default SearchBar;

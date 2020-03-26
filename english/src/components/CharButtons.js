import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SingleCharButton from './SingleCharButton';

const CharButtons = ({chars, skip, onPress}) => {
  const buttons = chars.map(char => {
    return (
      <TouchableOpacity key={char} onPress={() => onPress(char)}>
        <SingleCharButton char={char.toUpperCase()} />
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>{buttons}</View>
      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={skip}>
          <SingleCharButton style={styles.skip} char="->" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CharButtons;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '90%',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  skipContainer: {
    flexDirection: 'row-reverse',
    width: '100%',
  },
  skip: {},
});

import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import SingleCharButton from './SingleCharButton';

const CharButtons = ({chars, skip, onPress}) => {
  const buttons = chars.map(char => {
    return (
      <TouchableOpacity key={Math.random()} onPress={() => onPress(char)}>
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '95%',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skipContainer: {
    flexDirection: 'row-reverse',
  },
  skip: {},
});
export default CharButtons;

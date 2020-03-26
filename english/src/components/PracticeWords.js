import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PracticeWords = props => {
  return (
    <View style={{...styles.container, ...props.style}}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.text}>0/{props.words.length}</Text>
    </View>
  );
};

export default PracticeWords;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
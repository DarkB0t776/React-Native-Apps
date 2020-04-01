import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ResultCard = ({right, wrong, skipped}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.correct}>Correct: {right}</Text>
      <Text style={styles.incorrect}>Incorrect: {wrong}</Text>
      <Text style={styles.skip}>Skip: {skipped}</Text>
    </View>
  );
};

export default ResultCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'yellow',
    width: '90%',
    height: '30%',
    marginTop: 10,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  correct: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
  incorrect: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  skip: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

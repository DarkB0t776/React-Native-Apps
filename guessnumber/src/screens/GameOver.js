import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const GameOver = ({route}) => {
  const {rounds} = route.params;
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Rounds: {rounds}</Text>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

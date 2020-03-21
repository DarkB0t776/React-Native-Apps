import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SoundRow = () => {
  return (
    <View style={styles.container}>
      <Icon name="sound" style={styles.sound} />
      <Icon name="sound" style={styles.sound} />
      <Icon name="sound" style={styles.sound} />
    </View>
  );
};

export default SoundRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sound: {
    fontSize: 35,
  },
});

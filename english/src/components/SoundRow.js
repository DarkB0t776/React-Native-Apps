import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Sound = require('react-native-sound');

const SoundRow = ({infinitive, pastSimple, pastPart}) => {
  let sound1 = new Sound(infinitive, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });
  let sound2 = new Sound(pastSimple, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });
  let sound3 = new Sound(pastPart, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });

  const playSound = sound => {
    sound.play();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => playSound(sound1)}>
        <Icon name="sound" style={styles.sound} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => playSound(sound2)}>
        <Icon name="sound" style={styles.sound} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => playSound(sound3)}>
        <Icon name="sound" style={styles.sound} />
      </TouchableOpacity>
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

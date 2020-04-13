import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Sound = require('react-native-sound');

const SoundRow = ({infinitive, pastSimple, pastPart, playLoop}) => {
  useEffect(() => {
    // playSounds();
  });

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
  let play = playLoop;

  const getSounds = sound => {
    return new Promise((resolve, reject) => {});
  };

  const playSounds = () => {
    getSounds(sound1).then(res => {
      return getSounds(sound2);
    });
  };

  // if (playMusic) {
  //   playMusic = false;
  //   sound1.play(success => {
  //     if (success) {
  //       sound2.play(success => {
  //         if (success) {
  //           sound3.play(success => {
  //             if (success) {
  //               console.log('sound3 finished');
  //             } else {
  //               console.log('error3');
  //             }
  //           });
  //         } else {
  //           console.log('error2');
  //         }
  //       });
  //     } else {
  //       console.log('error1');
  //     }
  //   });
  // }

  // const playMusic = () => {
  //   const sounds = [sound1, sound2, sound3];
  //   for (let i = 0; i < sounds.length; i++) {
  //     const duration = sounds[i].getDuration();
  //     console.log(duration);
  //     let currentDur = null;
  //     sounds[i].getCurrentTime(seconds => (currentDur = seconds));
  //     console.log(currentDur);

  //     if (currentDur < duration) {
  //       sounds[i].play();
  //     } else {
  //       continue;
  //     }
  //   }
  // };

  // if (play) {
  //   playMusic();
  // }

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

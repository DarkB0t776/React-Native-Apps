import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {useRoute} from '@react-navigation/native';
import PracticeWords from '../components/PracticeWords';

const PracticeAllScreen = () => {
  const route = useRoute();

  const words = route.params.words[0].words;
  const blueWords = words.filter(item => item.color === '#76D3F5');
  const yellowWords = words.filter(item => item.color === '#F7D257');
  const greenWords = words.filter(item => item.color === '#63E244');
  const redWords = words.filter(item => item.color === '#F55757');

  return (
    <ImageBackground
      source={require('../../assets/images/wood-bg.jpg')}
      style={styles.bgImg}>
      <PracticeWords
        title="Blue Words"
        words={blueWords}
        style={{backgroundColor: '#76D3F5'}}
      />
      <PracticeWords
        title="Yellow Words"
        words={yellowWords}
        style={{backgroundColor: '#F7D257'}}
      />
      <PracticeWords
        title="Green Words"
        words={greenWords}
        style={{backgroundColor: '#63E244'}}
      />
      <PracticeWords
        title="Red Words"
        words={redWords}
        style={{backgroundColor: '#F55757'}}
      />
    </ImageBackground>
  );
};

export default PracticeAllScreen;

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

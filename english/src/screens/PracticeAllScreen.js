import React, {useEffect} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import PracticeWords from '../components/PracticeWords';

const PracticeAllScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const words = route.params.words[0];
  const setWords = route.params.setWords;

  const blueWords = words.filter(item => item.color === '#76D3F5');
  const yellowWords = words.filter(item => item.color === '#F7D257');
  const greenWords = words.filter(item => item.color === '#63E244');
  const redWords = words.filter(item => item.color === '#F55757');

  useEffect(() => {
    let newWords = [...words];
    for (const [idx, word] of newWords.entries()) {
      newWords[idx].infinitive.wrong = 0;
      newWords[idx].infinitive.right = 0;
      newWords[idx].pastSimple.wrong = 0;
      newWords[idx].pastSimple.right = 0;
      newWords[idx].pastPart.wrong = 0;
      newWords[idx].pastPart.right = 0;
      newWords[idx].skipped = 0;
    }

    setWords(newWords);
  });

  return (
    <ImageBackground
      source={require('../../assets/images/wood-bg.jpg')}
      style={styles.bgImg}>
      <PracticeWords
        title="All Words"
        words={words}
        setWords={setWords}
        navigation={navigation}
      />

      <PracticeWords
        title="Blue Words"
        words={blueWords}
        style={{backgroundColor: '#76D3F5'}}
        setWords={setWords}
        navigation={navigation}
      />

      <PracticeWords
        title="Yellow Words"
        words={yellowWords}
        style={{backgroundColor: '#F7D257'}}
        setWords={setWords}
        navigation={navigation}
      />

      <PracticeWords
        title="Green Words"
        words={greenWords}
        style={{backgroundColor: '#63E244'}}
        setWords={setWords}
        navigation={navigation}
      />

      <PracticeWords
        title="Red Words"
        words={redWords}
        style={{backgroundColor: '#F55757'}}
        setWords={setWords}
        navigation={navigation}
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

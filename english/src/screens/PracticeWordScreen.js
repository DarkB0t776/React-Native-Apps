import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import PracticeWordCard from '../components/PracticeWordCard';

const PracticeWordScreen = ({route}) => {
  const words = route.params.words;
  let card = null;
  const [done, setDone] = useState(false);

  const nextHandler = () => {
    setDone(true);
  };

  for (let i = 0; i < words.length; i++) {
    card = <PracticeWordCard word={words[i]} done={nextHandler} />;
    if (done) {
      setDone(false);
      continue;
    }
    break;
  }

  return (
    <ImageBackground
      source={require('../../assets/images/wood-bg.jpg')}
      style={styles.bgImg}>
      {card}
    </ImageBackground>
  );
};

export default PracticeWordScreen;

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
  },
});

import React, {useState, useRef, useEffect, useMemo} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import PracticeWordCard from '../components/PracticeWordCard';
import CharButtons from '../components/CharButtons';

const shuffle = arr => {
  let ctr = arr.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arr[ctr];
    arr[ctr] = arr[index];
    arr[index] = temp;
  }

  return arr;
};

const PracticeWordScreen = ({route}) => {
  const words = route.params.words;
  const [wordIdx, setWordIdx] = useState(0);
  const [infinitive, setInfinitive] = useState('');
  const [pastSimple, setPastSimple] = useState('');
  const [pastPart, setPastPart] = useState('');
  const infInput = useRef();
  const pastInput = useRef();
  const pastPartInput = useRef();

  const wordForms = `${words[wordIdx].infinitive.word}${words[wordIdx].pastSimple.word}${words[wordIdx].pastPart.word}ywzms`;
  const chars = shuffle(Array.from(new Set(wordForms.split(''))));

  useEffect(() => {
    infInput.current.focus();
  }, []);

  const nextHandler = () => {
    setWordIdx(prevIdx => {
      return (prevIdx + 1) % words.length;
    });
  };

  const onPressHandler = char => {
    if (pastInput.current.isFocused()) {
      setPastSimple(prevChar => prevChar + char);
    }
    if (pastPartInput.current.isFocused()) {
      setPastPart(prevChar => prevChar + char);
    }
    if (infInput.current.isFocused()) {
      setInfinitive(prevChar => prevChar + char);
    }
  };

  if (words[wordIdx].infinitive.word === infinitive) {
    pastInput.current.focus();
    if (words[wordIdx].pastSimple.word === pastSimple) {
      pastPartInput.current.focus();
    }
  }

  if (
    words[wordIdx].infinitive.word === infinitive &&
    words[wordIdx].pastSimple.word === pastSimple &&
    words[wordIdx].pastPart.word === pastPart
  ) {
    nextHandler();
    setInfinitive('');
    setPastSimple('');
    setPastPart('');
  }

  return (
    <ImageBackground
      source={require('../../assets/images/wood-bg.jpg')}
      style={styles.bgImg}>
      <PracticeWordCard
        word={words[wordIdx]}
        infinitive={infinitive}
        pastSimple={pastSimple}
        pastPart={pastPart}
        setInfinitive={setInfinitive}
        setPastSimple={setPastSimple}
        setPastPart={setPastPart}
        infRef={infInput}
        pastRef={pastInput}
        pastPrRef={pastPartInput}
      />
      <CharButtons chars={chars} skip={nextHandler} onPress={onPressHandler} />
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

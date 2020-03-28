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
  const [userInput, setUserInput] = useState('');
  const [chars, setChars] = useState([]);
  const [inf, setInf] = useState(false);
  const [past, setPast] = useState(false);
  const [pastPart, setPastPart] = useState(false);
  const [i, setI] = useState(0);
  const userInputRef = useRef();

  const wordForms = `${words[wordIdx].infinitive.word}${words[wordIdx].pastSimple.word}${words[wordIdx].pastPart.word}ywzms`;

  const infinitive = words[wordIdx].infinitive.word.split('');
  const pastSimple = words[wordIdx].pastSimple.word.split('');
  const pastPt = words[wordIdx].pastPart.word.split('');

  useEffect(() => {
    userInputRef.current.focus();
    setUserInput('');
  }, []);

  useEffect(() => {
    setChars(shuffle(Array.from(new Set(wordForms.split('')))));
  }, [wordIdx]);

  useEffect(() => {
    setChars(shuffle(Array.from(new Set(wordForms.split('')))));
  }, [inf]);

  useEffect(() => {
    setChars(shuffle(Array.from(new Set(wordForms.split('')))));
  }, [past]);

  const nextHandler = () => {
    setWordIdx(prevIdx => {
      return (prevIdx + 1) % words.length;
    });
  };

  if (userInput === words[wordIdx].infinitive.word && !inf) {
    console.log('inf');
    setInf(true);
    setI(0);
    setUserInput('');
  }

  if (userInput === words[wordIdx].pastSimple.word && inf && !past) {
    console.log('past');
    setPast(true);
    setI(0);
    setUserInput('');
  }

  if (userInput === words[wordIdx].pastPart.word && inf && past) {
    console.log('pastPart');
    setPastPart(true);
    setI(0);
    setUserInput('');
  }

  if (inf && past && pastPart) {
    nextHandler();
    setInf(false);
    setPast(false);
    setPastPart(false);
  }

  const checkChar = (char, word) => {
    while (i <= word.length) {
      if (char !== word[i]) {
        console.log('wrong - ', char);
        console.log('i - ', i);
        break;
      } else {
        console.log('right - ', char);
        console.log('i - ', i);
        setUserInput(prevChar => prevChar + char);
        setI(i => i + 1);
        break;
      }
    }
  };
  const onPressHandler = char => {
    if (!inf) {
      checkChar(char, infinitive);
    }
    if (inf && !past) {
      checkChar(char, pastSimple);
    }
    if (past) {
      console.log('PT');
      checkChar(char, pastPt);
    }

    console.log(i);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/wood-bg.jpg')}
      style={styles.bgImg}>
      <PracticeWordCard
        word={words[wordIdx]}
        userInput={userInput}
        userInputRef={userInputRef}
        inf={inf}
        past={past}
        pastPart={pastPart}
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

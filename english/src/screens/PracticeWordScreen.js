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
  const setWords = route.params.setWords;
  const [wordIdx, setWordIdx] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [chars, setChars] = useState([]);
  const [inf, setInf] = useState(false);
  const [past, setPast] = useState(false);
  const [pastPart, setPastPart] = useState(false);
  const [i, setI] = useState(0);
  const userInputRef = useRef();

  console.log(words);

  let done = false;

  const wordForms = `${words[wordIdx].infinitive.word}${words[wordIdx].pastSimple.word}${words[wordIdx].pastPart.word}ywzms`;

  const infinitive = words[wordIdx].infinitive.word.split('');
  const pastSimple = words[wordIdx].pastSimple.word.split('');
  const pastPt = words[wordIdx].pastPart.word.split('');

  useEffect(() => {
    if (userInputRef.current) {
      userInputRef.current.focus();
    }
    setUserInput('');
    setInf(false);
    setPast(false);
    setPastPart(false);
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
    setInf(true);
    setI(0);
    setUserInput('');
  }

  if (userInput === words[wordIdx].pastSimple.word && inf && !past) {
    setPast(true);
    setI(0);
    setUserInput('');
  }

  if (userInput === words[wordIdx].pastPart.word && inf && past) {
    setPastPart(true);
    setI(0);
    setUserInput('');
  }

  const checkChar = (char, word) => {
    while (i <= word.length) {
      if (char !== word[i]) {
        break;
      } else {
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
      checkChar(char, pastPt);
    }
  };

  if (inf && past && pastPart) {
    let newWords = [...words];
    if (newWords[wordIdx].stars < 3) newWords[wordIdx].stars += 1;
    setWords(newWords);

    userInputRef.current.focus();
    setUserInput('');
    setInf(false);
    setPast(false);
    setPastPart(false);
  }

  if (words[wordIdx].stars === 3) {
    done = true;
  }

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
        done={done}
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

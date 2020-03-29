import React, {useState, useRef, useEffect} from 'react';
import {Animated, StyleSheet, ImageBackground} from 'react-native';
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
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  const userInputRef = useRef();

  let done = false;

  const infinitive = words[wordIdx].infinitive.word.split('');
  const pastSimple = words[wordIdx].pastSimple.word.split('');
  const pastPt = words[wordIdx].pastPart.word.split('');

  let infinitChars = [...infinitive, 'y', 'w', 'z', 'm', 's'];
  let pastChars = [...pastSimple, 'y', 'w', 'z', 'm', 's'];
  let ptChars = [...pastPt, 'y', 'w', 'z', 'm', 's'];

  useEffect(() => {
    if (userInputRef.current) {
      userInputRef.current.focus();
    }
    animation();
  }, []);

  useEffect(() => {
    animation();
    resetData();
    setChars(shuffle(infinitChars));
  }, [wordIdx]);

  useEffect(() => {
    animation();
    setChars(shuffle(pastChars));
  }, [inf]);

  useEffect(() => {
    animation();
    setChars(shuffle(ptChars));
  }, [past]);

  useEffect(() => {
    animation();
    setChars(shuffle(infinitChars));
  }, [pastPart]);

  const nextHandler = () => {
    setWordIdx(prevIdx => {
      return (prevIdx + 1) % words.length;
    });
  };

  if (userInput === words[wordIdx].infinitive.word && !inf) {
    setInf(true);
    setI(0);
    setUserInput('');
    setFadeAnim(new Animated.Value(0));
  }

  if (userInput === words[wordIdx].pastSimple.word && inf && !past) {
    setPast(true);
    setI(0);
    setUserInput('');
    setFadeAnim(new Animated.Value(0));
  }

  if (userInput === words[wordIdx].pastPart.word && inf && past) {
    setPastPart(true);
    setI(0);
    setUserInput('');
    setFadeAnim(new Animated.Value(0));
  }

  const checkChar = (char, word) => {
    while (i <= word.length) {
      if (char !== word[i]) {
        break;
      } else {
        setUserInput(prevChar => prevChar + char);
        const charIdx = chars.findIndex(item => item === char);
        let newChars = [...chars];
        newChars.splice(charIdx, 1);
        setChars(newChars);
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

  const animation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  const resetData = () => {
    setUserInput('');
    setInf(false);
    setPast(false);
    setPastPart(false);
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
      <Animated.View style={{opacity: fadeAnim}}>
        <CharButtons
          chars={chars}
          skip={nextHandler}
          onPress={onPressHandler}
        />
      </Animated.View>
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
  container: {
    flex: 1,
  },
});

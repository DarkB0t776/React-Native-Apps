import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import ResultCard from '../components/ResultCard';
import Colors from '../constants/Colors';
import Mymodal from '../components/Mymodal';

const PracticeResultsScreen = ({route, navigation}) => {
  const words = route.params.words;
  const setAllWords = route.params.setAllWords;
  const exam = route.params.exam;
  const getPercentage = route.params.setPercentage;
  const [selectedWord, setSelectedWord] = useState({});
  const [modal, setModal] = useState(false);

  let right = 0;
  let wrong = 0;
  let skipped = 0;
  const rightWords = [];

  useEffect(() => {
    getPercentage(percentage);
  });

  const hideModal = () => {
    setModal(false);
  };

  for (const [idx, word] of words.entries()) {
    let newWords = [...words];
    if (word.skipped) {
      skipped += 1;
    }
    if (
      word.infinitive.wrong === 0 &&
      word.pastSimple.wrong === 0 &&
      word.pastPart.wrong === 0 &&
      word.skipped === 0
    ) {
      rightWords.push(word);
      newWords[idx].practiced += 1;
      setAllWords(prevWords => {
        const newArr = prevWords.map(item => {
          if (item.id === newWords[idx].id) {
            item = newWords[idx];
            return item;
          }
          return item;
        });
        return [...newArr];
      });
      right += 1;
    }
    if (
      (word.infinitive.wrong !== 0 ||
        word.pastSimple.wrong !== 0 ||
        word.pastPart.wrong !== 0) &&
      word.skipped === 0
    ) {
      newWords[idx].fail += 1;
      setAllWords(prevWords => {
        const newArr = prevWords.map(item => {
          if (item.id === newWords[idx].id) {
            item = newWords[idx];
            return item;
          }
          return item;
        });
        return [...newArr];
      });
      wrong += 1;
    }
  }

  const percentage = (rightWords.length / words.length).toFixed(2) * 100;

  let myModal = (
    <Mymodal hideModal={hideModal} modalVisible={modal} verb={selectedWord} />
  );

  if (Object.keys(selectedWord).length === 0) {
    myModal = null;
  }

  let resultCard = <ResultCard right={right} wrong={wrong} skipped={skipped} />;

  if (exam) {
    resultCard = (
      <ResultCard
        right={right}
        wrong={wrong}
        skipped={skipped}
        exam={exam}
        percentage={percentage}
      />
    );
  }

  return (
    <View style={styles.container}>
      {myModal}
      {resultCard}
      <View style={styles.wordsContainer}>
        <FlatList
          data={words}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedWord(item);
                  setModal(true);
                }}>
                <View style={styles.listContainer}>
                  <View
                    style={
                      item.skipped
                        ? {backgroundColor: Colors.lightBlue}
                        : item.infinitive.wrong > 0
                        ? {backgroundColor: 'red'}
                        : {backgroundColor: Colors.mainGreen}
                    }>
                    <Text style={styles.word}>{item.infinitive.word}</Text>
                  </View>
                  <View
                    style={
                      item.skipped
                        ? {backgroundColor: Colors.lightBlue}
                        : item.pastSimple.wrong > 0
                        ? {backgroundColor: 'red'}
                        : {backgroundColor: Colors.mainGreen}
                    }>
                    <Text style={styles.word}>{item.pastSimple.word}</Text>
                  </View>
                  <View
                    style={
                      item.skipped
                        ? {backgroundColor: Colors.lightBlue}
                        : item.pastPart.wrong > 0
                        ? {backgroundColor: 'red'}
                        : {backgroundColor: Colors.mainGreen}
                    }>
                    <Text style={styles.word}>{item.pastPart.word}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default PracticeResultsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  wordsContainer: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginVertical: 5,
  },
  word: {
    paddingHorizontal: 30,
  },
});

import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import ResultCard from '../components/ResultCard';
import Colors from '../constants/Colors';
import Mymodal from '../components/Mymodal';

const PracticeResultsScreen = ({route}) => {
  const words = route.params.words;
  const setWords = route.params.setWords;
  const [selectedWord, setSelectedWord] = useState({});
  const [modal, setModal] = useState(false);

  let right = 0;
  let wrong = 0;
  let skipped = 0;

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
      newWords[idx].practiced += 1;
      setWords(newWords);
      right += 1;
    }
    if (
      (word.infinitive.wrong !== 0 ||
        word.pastSimple.wrong !== 0 ||
        word.pastPart.wrong !== 0) &&
      word.skipped === 0
    ) {
      newWords[idx].fail += 1;
      setWords(newWords);
      wrong += 1;
    }
  }

  let myModal = (
    <Mymodal hideModal={hideModal} modalVisible={modal} verb={selectedWord} />
  );

  if (Object.keys(selectedWord).length === 0) {
    myModal = null;
  }

  return (
    <View style={styles.container}>
      {myModal}
      <ResultCard right={right} wrong={wrong} skipped={skipped} />
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

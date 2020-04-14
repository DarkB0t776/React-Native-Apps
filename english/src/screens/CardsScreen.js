import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';

let idx = 0;

const CardsScreen = ({route, navigation}) => {
  const words = route.params.words;
  const changeColor = route.params.changeColor;
  const cards = true;
  const flatListRef = useRef();
  const [showSection, setShowSection] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [playLoop, setPlayLoop] = useState(false);
  const [term, setTerm] = useState('');

  useEffect(() => {
    for (const word of words) {
      if (
        word.infinitive.word === term ||
        word.pastSimple.word === term ||
        word.pastPart.word === term
      ) {
        const idxW = words.indexOf(word);
        flatListRef.current.scrollToIndex({
          index: idxW,
          animated: true,
        });
      }
    }
  });

  const showSectionHandler = () => {
    setShowSection(!showSection);
  };

  const refreshListHandler = () => {
    setRefresh(!refresh);
  };

  const startPlaySounds = () => {
    setPlayLoop(!playLoop);
  };

  const onSearchHandler = searchTerm => {
    setTerm(searchTerm);
  };

  console.log(term);

  navigation.setOptions({
    header: props => (
      <CardHeader
        {...props}
        showSectionHandler={showSectionHandler}
        playLoop={startPlaySounds}
        term={term}
        onSearchHandler={onSearchHandler}
        words={words}
      />
    ),
  });

  while (playLoop) {
    flatListRef.current.scrollToIndex({
      index: ++idx,
      animated: true,
    });
    if (idx === words.length - 1) {
      idx = 0;
      setPlayLoop(false);
      break;
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        getItemLayout={(data, index) => ({
          length: 360,
          offset: 360 * index,
          index,
        })}
        pagingEnabled={true}
        horizontal
        style={styles.list}
        data={words}
        extraData={refresh}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.cardContainer}>
              <Card
                word={item}
                changeColor={changeColor}
                cards={cards}
                showSection={showSection}
                refreshList={refreshListHandler}
                playLoop={playLoop}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row'},
  cardContainer: {},
});

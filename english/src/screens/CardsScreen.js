import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';

const CardsScreen = ({route, navigation}) => {
  const words = route.params.words;
  const changeColor = route.params.changeColor;
  const cards = true;
  const [showSection, setShowSection] = useState(false);

  const showSectionHandler = () => {
    setShowSection(!showSection);
  };

  navigation.setOptions({
    header: props => (
      <CardHeader {...props} showSectionHandler={showSectionHandler} />
    ),
  });

  console.log(showSection);

  return (
    <View style={styles.container}>
      <FlatList
        pagingEnabled={true}
        horizontal
        initialNumToRender={1}
        style={styles.list}
        data={words}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.cardContainer}>
              <Card
                word={item}
                changeColor={changeColor}
                cards={cards}
                showSection={showSection}
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

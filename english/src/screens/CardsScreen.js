import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Card from '../components/Card';

const CardsScreen = ({route}) => {
  const words = route.params.words;
  const changeColor = route.params.changeColor;
  const cards = true;

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
              <Card word={item} changeColor={changeColor} cards={cards} />
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

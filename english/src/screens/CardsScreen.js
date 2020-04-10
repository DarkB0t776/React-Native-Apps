import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';

const CardsScreen = ({route, navigation}) => {
  const words = route.params.words;
  const changeColor = route.params.changeColor;
  const cards = true;
  const [showSection, setShowSection] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const showSectionHandler = () => {
    setShowSection(!showSection);
  };

  const refreshListHandler = () => {
    setRefresh(!refresh);
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

import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Fonts from '../constants/fonts';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOver = ({route, navigation}) => {
  const {rounds} = route.params;
  const {newGame} = route.params;
  return (
    <View style={styles.screen}>
      <Text style={styles.over}>Game Over</Text>
      <Image
        style={styles.image}
        source={require('../../assets/success.png')}
      />
      <Text style={styles.rounds}>
        Rounds: <Text style={styles.highlight}>{rounds}</Text>
      </Text>
      <MainButton
        onPress={() => {
          newGame;
          navigation.navigate('Main');
        }}>
        New Game
      </MainButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  over: {
    fontFamily: Fonts.openSans.bold,
    fontSize: 30,
  },
  rounds: {
    fontFamily: Fonts.openSans.regular,
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: '80%',
    height: 200,
    borderRadius: 6,
    marginVertical: 10,
  },
  highlight: {
    color: Colors.primary,
  },
});

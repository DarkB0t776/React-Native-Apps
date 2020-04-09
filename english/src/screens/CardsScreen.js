import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from '../components/Card';

const CardsScreen = ({route}) => {
  const words = route.params.words;
  const {changeColor} = route.params;
  console.log(words);

  return <Card word={words[0]} changeColor={changeColor} />;
};

export default CardsScreen;

const styles = StyleSheet.create({});

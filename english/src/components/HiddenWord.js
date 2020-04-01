import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QuestionIcon from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';

const HiddenWord = props => {
  let word = <QuestionIcon name="question" style={styles.icon} />;
  let title = <Text style={styles.text}>{props.title}</Text>;

  if (props.value) {
    title = <Text style={styles.rightTitle}>{props.title}</Text>;
    word = <Text style={styles.rightWord}>{props.word}</Text>;
  }

  return (
    <View style={styles.container}>
      {title}
      {word}
    </View>
  );
};

export default HiddenWord;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  rightTitle: {
    color: Colors.mainGreen,
    fontWeight: 'bold',
  },
  rightWord: {
    color: Colors.mainGreen,
    fontWeight: 'bold',
  },
});

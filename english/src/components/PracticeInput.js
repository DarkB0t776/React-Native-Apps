import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Dash from 'react-native-dash';

const PracticeInput = props => {
  return (
    <>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeHandler}
      />
      <Dash
        style={{flexDirection: 'row', width: 25}}
        dashColor="black"
        dashLength={6}
      />
    </>
  );
};

export default PracticeInput;

const styles = StyleSheet.create({
  input: {
    width: '15%',
  },
  title: {
    color: '#802504',
    fontWeight: 'bold',
  },
});

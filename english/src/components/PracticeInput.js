import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Dash from 'react-native-dash';

const PracticeInput = props => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        showSoftInputOnFocus={false}
        autoCapitalize="none"
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeHandler}
        ref={props.refInput}
      />
      <Dash
        style={{flexDirection: 'row', width: 25}}
        dashColor="black"
        dashLength={6}
      />
    </View>
  );
};

export default PracticeInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
  },
  title: {
    color: '#802504',
    fontWeight: 'bold',
  },
});

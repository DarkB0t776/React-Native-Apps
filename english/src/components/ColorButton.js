import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ColorButton = props => {
  return <View style={{...styles.colorButton, ...props.style}}></View>;
};

export default ColorButton;

const styles = StyleSheet.create({
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'white',
  },
});

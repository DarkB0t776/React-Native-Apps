import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, } from "react-native";

const TodoItem = ({item, onPressHandler}) => {
  return (
        <TouchableOpacity onPress={() => onPressHandler(item.key)}>
          <Text style={styles.task}>{item.task}</Text>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task: {
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    fontSize: 16,
  }
});

export default TodoItem;
import React, {useState} from "react";
import {View, TextInput, StyleSheet} from "react-native";
import {FontAwesome} from '@expo/vector-icons';

const TaskInput = ({onSubmitHandler}) => {

  const [task, setTask] = useState('');

  const changeHandler = (task) => {
    setTask(task);
  };

  return <View style={styles.background}>
    <FontAwesome name="tasks" style={styles.icon}/>
    <TextInput
      clearButtonMode="always"
      style={styles.input}
      placeholder="Task"
      placeholderTextColor="#A8A4A4"
      onChangeText={changeHandler}
      onEndEditing={() => onSubmitHandler(task)}
    />
  </View>
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    backgroundColor: '#d3cdcc',
    margin: 15,
    padding: 5,
    borderRadius: 6,
  },
  icon: {
    fontSize: 30,
    marginRight: 5
  },
  input: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default TaskInput;
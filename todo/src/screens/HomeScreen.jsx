import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from "react-native";
import TaskInput from "../components/TaskInput";
import TodoItem from "../components/TodoItem";




const HomeScreen = () => {


  const [todos, setTodos] = useState([
    {task: 'Go shopping', key: '1'},
    {task: 'Wash car', key: '2'}
    ]);

  const onPressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key !== key);
    });
  };

  const onSubmitHandler = (task) => {
    if(!task){
      return;
    }
    setTodos((prevTodos) => {
      return [
        {task: task, key: Math.random().toString()},
        ...prevTodos
      ];
    });
  };

  return (
    <View style={styles.container}>
      <TaskInput
        onSubmitHandler={onSubmitHandler}
      />
      <ScrollView nestedScrollEnabled={true}>
          <FlatList
            nestedScrollEnabled={true}
            data={todos}
            renderItem={({item}) => {
              return <TodoItem
                onPressHandler={onPressHandler}
                item={item}
              />;
            }}
          />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default HomeScreen;
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createStackNavigator();

const myStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Todo"
          component={HomeScreen}
          options={{title: "Todo App"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default myStack;
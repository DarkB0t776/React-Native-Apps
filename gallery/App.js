import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from "./src/screens/MainScreen";
import ImageScreen from "./src/screens/ImageScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: 'Gallery'}}
        />

        <Stack.Screen
          name="Image"
          component={ImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


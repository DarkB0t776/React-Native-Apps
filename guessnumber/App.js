import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import GameScreen from './src/screens/GameScreen';
import GameOver from './src/screens/GameOver';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Over" component={GameOver} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

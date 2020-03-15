import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './src/redux/reducers/index';

import MainScreen from './src/screens/MainScreen';
import ImageScreen from './src/screens/ImageScreen';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducer);

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Main'
            component={MainScreen}
            options={{ title: 'Gallery' }}
          />

          <Stack.Screen name='Image' component={ImageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

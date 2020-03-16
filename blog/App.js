import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, EvilIcons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather style={{ marginRight: 10 }} name='plus' size={30} />
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name='Show'
          component={ShowScreen}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Edit', { id: route.params.id })
                }
              >
                <EvilIcons
                  style={{ marginRight: 10 }}
                  name='pencil'
                  size={35}
                />
              </TouchableOpacity>
            )
          })}
        />

        <Stack.Screen name='Create' component={CreateScreen} />
        <Stack.Screen name='Edit' component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

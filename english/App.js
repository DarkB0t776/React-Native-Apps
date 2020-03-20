import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import VerbsScreen from './src/screens/VerbsScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import PracticeScreen from './src/screens/PracticeScreen';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: styles.header,
          labelStyle: styles.label,
          indicatorStyle: styles.indicator,
        }}>
        <Tab.Screen name="Verbs" component={VerbsScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="Practice" component={PracticeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E52E2E',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
    height: 100,
    justifyContent: 'flex-end',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  indicator: {
    backgroundColor: 'white',
    height: 4,
    width: 100,
    alignItems: 'center',
  },
});

export default App;

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import VerbsScreen from './src/screens/VerbsScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import PracticeScreen from './src/screens/PracticeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PracticeAllScreen from './src/screens/PracticeAllScreen';
import PracticeWordScreen from './src/screens/PracticeWordScreen';
import PracticeResultsScreen from './src/screens/PracticeResultsScreen';
import ExamScreen from './src/screens/ExamScreen';
import Header from './src/components/Header';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const PracticeStack = createStackNavigator();
const VerbStack = createStackNavigator();

const Practice = ({navigation}) => (
  <PracticeStack.Navigator>
    <PracticeStack.Screen
      name="Practice"
      component={PracticeScreen}
      options={{header: () => null}}
    />
    <PracticeStack.Screen name="PracticeAll" component={PracticeAllScreen} />
    <PracticeStack.Screen name="PracticeWord" component={PracticeWordScreen} />
    <PracticeStack.Screen
      name="PracticeResults"
      component={PracticeResultsScreen}
    />
    <PracticeStack.Screen name="Exam" component={ExamScreen} />
  </PracticeStack.Navigator>
);

const Verbs = () => (
  <VerbStack.Navigator>
    <VerbStack.Screen
      name="Verbs"
      component={VerbsScreen}
      options={{
        header: () => null,
      }}
    />
  </VerbStack.Navigator>
);

const App = props => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => <Header {...props} />}
          tabBarOptions={{
            style: styles.header,
            labelStyle: styles.label,
            indicatorStyle: styles.indicator,
          }}>
          <Tab.Screen name="Verbs" component={Verbs} />
          <Tab.Screen name="Favorite" component={FavoriteScreen} />
          <Tab.Screen name="Practice" component={Practice} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
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

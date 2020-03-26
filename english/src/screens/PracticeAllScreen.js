import React from 'react';
import {StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import PracticeWords from '../components/PracticeWords';

const PracticeAllScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const words = route.params.words[0].words;
  const blueWords = words.filter(item => item.color === '#76D3F5');
  const yellowWords = words.filter(item => item.color === '#F7D257');
  const greenWords = words.filter(item => item.color === '#63E244');
  const redWords = words.filter(item => item.color === '#F55757');

  return (
    <ImageBackground
      source={require('../../assets/images/wood-bg.jpg')}
      style={styles.bgImg}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('PracticeWord', {words})}>
        <PracticeWords title="All Words" words={words} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('PracticeWord', {words: blueWords})}>
        <PracticeWords
          title="Blue Words"
          words={blueWords}
          style={{backgroundColor: '#76D3F5'}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate('PracticeWord', {words: yellowWords})
        }>
        <PracticeWords
          title="Yellow Words"
          words={yellowWords}
          style={{backgroundColor: '#F7D257'}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate('PracticeWord', {words: greenWords})
        }>
        <PracticeWords
          title="Green Words"
          words={greenWords}
          style={{backgroundColor: '#63E244'}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('PracticeWord', {words: redWords})}>
        <PracticeWords
          title="Red Words"
          words={redWords}
          style={{backgroundColor: '#F55757'}}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default PracticeAllScreen;

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: '85%',
  },
});
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Star from '../components/Star';
import ColorButton from '../components/ColorButton';

const Card = ({word, changeColor}) => {
  let star1 = <Star name="star-outlined" key="1" />;
  let star2 = <Star name="star-outlined" key="2" />;
  let star3 = <Star name="star-outlined" key="3" />;

  if (word.stars === 1) {
    star1 = <Star name="star" key="1" />;
  }
  if (word.stars === 2) {
    star2 = <Star name="star" key="2" />;
    star1 = <Star name="star" key="1" />;
  }
  if (word.stars === 3) {
    star3 = <Star name="star" key="3" />;
    star2 = <Star name="star" key="2" />;
    star1 = <Star name="star" key="1" />;
  }

  return (
    <View style={styles.card}>
      <View style={styles.starsContainer}>
        {star1}
        {star2}
        {star3}
      </View>
      <View style={styles.colorsContainer}>
        <TouchableOpacity onPress={() => changeColor('white', word.id)}>
          <ColorButton />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeColor('#76D3F5', word.id)}>
          <ColorButton style={{backgroundColor: '#76D3F5'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeColor('#F7D257', word.id)}>
          <ColorButton style={{backgroundColor: '#F7D257'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeColor('#63E244', word.id)}>
          <ColorButton style={{backgroundColor: '#63E244'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeColor('#F55757', word.id)}>
          <ColorButton style={{backgroundColor: '#F55757'}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  colorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});

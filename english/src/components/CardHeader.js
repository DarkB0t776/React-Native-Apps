import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ArrowLeft from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/Fontisto';
import EyeIcon from 'react-native-vector-icons/Ionicons';
import PlayIcon from 'react-native-vector-icons/MaterialIcons';

const CardHeader = ({showSectionHandler, playLoop}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={() => navigation.navigate('Verbs')}>
          <ArrowLeft name="arrowleft" style={styles.arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.title}>Cards</Text>
      </View>
      <View style={styles.rightSection}>
        <SearchIcon name="search" style={styles.searchIcon} />
        <TouchableOpacity onPress={showSectionHandler}>
          <EyeIcon name="md-eye" style={styles.eyeIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={playLoop}>
          <PlayIcon name="play-circle-outline" style={styles.playIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardHeader;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    marginTop: 7,
  },
  arrowLeft: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  rightSection: {
    flexDirection: 'row',
    marginTop: 7,
  },
  searchIcon: {
    fontSize: 25,
    color: 'white',
  },
  eyeIcon: {
    fontSize: 25,
    color: 'white',
    marginLeft: 15,
  },
  playIcon: {
    fontSize: 25,
    color: 'white',
    marginHorizontal: 15,
  },
});

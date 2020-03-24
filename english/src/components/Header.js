import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import MenuIcon from 'react-native-vector-icons/Entypo';
import SchoolIcon from 'react-native-vector-icons/Ionicons';
import PracticeModal from './PracticeModal';

const Header = ({navigation, state}) => {
  const [modal, setModal] = useState(false);

  let labels = state.routes;
  let words = [];
  const verbsScreen = state.routes.find(item => item.name === 'Verbs');

  if (typeof verbsScreen.state !== 'undefined') {
    words.push(verbsScreen.state.routes[0].params);
  }

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <View style={styles.header}>
      <PracticeModal
        visible={modal}
        hideModal={hideModal}
        navigation={navigation}
        words={words}
      />
      <View style={styles.topSection}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MenuIcon name="menu" style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>COLOR VERBS</Text>
        <Icon name="search" style={styles.searchIcon} />
        <TouchableOpacity onPress={showModal}>
          <SchoolIcon name="md-school" style={styles.schoolIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={labels}
        horizontal
        renderItem={({item}) => {
          return <Text style={styles.label}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    height: 70,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuIcon: {
    color: 'white',
    fontSize: 30,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  searchIcon: {
    color: 'white',
    fontSize: 30,
  },
  schoolIcon: {
    color: 'white',
    fontSize: 30,
  },
  label: {
    marginHorizontal: 10,
    marginTop: 13,
    marginLeft: 50,
    color: 'white',
    fontWeight: 'bold',
  },
});

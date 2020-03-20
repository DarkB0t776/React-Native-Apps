import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import FormsTitle from '../components/FormsTitle';
import verbsData from '../../database/verbs';
import VerbsList from '../components/VerbsList';
import MyModal from '../components/Mymodal';

const VerbsScreen = () => {
  const [verbs, setVerbs] = useState(verbsData);
  const [showModal, setShowModal] = useState(false);

  const appearModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <MyModal hideModal={hideModal} modalVisible={showModal} />
      <FormsTitle />
      <VerbsList data={verbs} showModal={appearModal} />
    </View>
  );
};

export default VerbsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

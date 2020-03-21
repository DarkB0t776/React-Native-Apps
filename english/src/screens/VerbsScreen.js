import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import FormsTitle from '../components/FormsTitle';
import verbsData from '../../database/verbs';
import VerbsList from '../components/VerbsList';
import MyModal from '../components/Mymodal';

const VerbsScreen = () => {
  const [verbs, setVerbs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWord, setSelectedWord] = useState({});

  useEffect(() => {
    setVerbs(verbsData);
    setSelectedWord(verbsData[0]);
  }, []);

  const appearModal = word => {
    setSelectedWord(word);
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const changeColor = (color, id) => {
    const wordIdx = verbs.findIndex(item => item.id === id);
    const newArr = [...verbs];
    newArr[wordIdx].color = color;
    setVerbs(newArr);
  };

  return (
    <View style={styles.container}>
      <MyModal
        hideModal={hideModal}
        modalVisible={showModal}
        verb={selectedWord}
        changeColor={changeColor}
      />
      <FormsTitle />
      <VerbsList selected={selectedWord} data={verbs} showModal={appearModal} />
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

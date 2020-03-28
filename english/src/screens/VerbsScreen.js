import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import FormsTitle from '../components/FormsTitle';
import verbsData from '../../database/verbs';
import VerbsList from '../components/VerbsList';
import MyModal from '../components/Mymodal';
import {useNavigation} from '@react-navigation/native';

const VerbsScreen = () => {
  const [verbs, setVerbs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWord, setSelectedWord] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    setVerbs(verbsData);
  }, []);

  useEffect(() => {
    navigation.setParams({words: verbs});
  }, [verbs]);

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

  let modal = (
    <MyModal
      hideModal={hideModal}
      modalVisible={showModal}
      verb={selectedWord}
      changeColor={changeColor}
    />
  );

  if (Object.keys(selectedWord).length === 0) {
    modal = null;
  }

  return (
    <View style={styles.container}>
      {modal}
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

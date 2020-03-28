import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Images from '../constants/Images';
import Colors from '../constants/Colors';
import MyModal from '../components/Mymodal';
import QuestionIcon from 'react-native-vector-icons/AntDesign';
import PracticeInput from '../components/PracticeInput';
import HiddenWord from '../components/HiddenWord';

const PracticeWordCard = props => {
  let imageSrc;
  let key = props.word.infinitive.word;

  const [modal, setModal] = useState(false);

  const hideModal = () => {
    setModal(false);
  };

  if (Images[key]) {
    imageSrc = Images[key].imageSource;
  }

  return (
    <View style={styles.card}>
      <MyModal hideModal={hideModal} modalVisible={modal} verb={props.word} />
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => setModal(true)}>
          <QuestionIcon name="questioncircleo" style={styles.questIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={imageSrc} style={styles.image} />
      </View>
      <Text style={styles.definition}>{props.word.definition}</Text>
      <Text style={styles.translation}>{props.word.ua.join(', ')}</Text>
      <View style={styles.hiddenWordContainer}>
        <HiddenWord
          title="1.INF"
          value={props.inf}
          word={props.word.infinitive.word}
        />
        <HiddenWord
          title="2.PS"
          value={props.past}
          word={props.word.pastSimple.word}
        />
        <HiddenWord
          title="3.PP"
          value={props.pastPart}
          word={props.word.pastPart.word}
        />
      </View>
      <View style={styles.inputContainer}>
        <PracticeInput
          value={props.userInput}
          onChangeHandler={props.setInfinitive}
          refInput={props.userInputRef}
        />
      </View>
    </View>
  );
};

export default PracticeWordCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'yellow',
    height: '70%',
    width: '95%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questIcon: {
    fontSize: 35,
    marginLeft: 5,
    marginTop: 5,
  },
  imageContainer: {
    width: '70%',
    height: '40%',
    marginHorizontal: 30,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  definition: {
    textAlign: 'center',
  },
  translation: {
    textAlign: 'center',
    color: Colors.translationColor,
    fontWeight: 'bold',
  },
  hiddenWordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

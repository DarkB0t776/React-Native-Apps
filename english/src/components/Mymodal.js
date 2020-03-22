import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorButton from './ColorButton';
import WordsRow from './WordsRow';
import TranscriptRow from './TranscriptRow';
import SoundRow from './SoundRow';
import TranslationRow from './TranslationRow';
import Definition from './Definition';
import Examples from './Examples';
import Images from '../constants/Images';

const Mymodal = ({hideModal, modalVisible, verb, changeColor}) => {
  let imageSrc;
  let key = verb.infinitive.word;

  if (Images[key]) {
    imageSrc = Images[key].imageSource;
  }

  return (
    <Modal visible={modalVisible} transparent={true}>
      <View style={styles.backdrop}>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={hideModal}>
              <Icon name="md-close" size={35} />
            </TouchableOpacity>
          </View>
          <View style={styles.colorsContainer}>
            <TouchableOpacity onPress={() => changeColor('white', verb.id)}>
              <ColorButton />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeColor('#76D3F5', verb.id)}>
              <ColorButton style={{backgroundColor: '#76D3F5'}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeColor('#F7D257', verb.id)}>
              <ColorButton style={{backgroundColor: '#F7D257'}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeColor('#63E244', verb.id)}>
              <ColorButton style={{backgroundColor: '#63E244'}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeColor('#F55757', verb.id)}>
              <ColorButton style={{backgroundColor: '#F55757'}} />
            </TouchableOpacity>
          </View>
          <View style={styles.wordsContainer}>
            <WordsRow word={verb} />
          </View>
          <View style={styles.transcriptContainer}>
            <TranscriptRow word={verb} />
          </View>
          <View style={styles.soundContainer}>
            <SoundRow
              infinitive={verb.infinitive.audio}
              pastSimple={verb.pastSimple.audio}
              pastPart={verb.pastPart.audio}
            />
          </View>
          <View style={styles.translateContainer}>
            <TranslationRow translation={verb.ua} />
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={imageSrc} />
          </View>
          <View style={styles.definitionContainer}>
            <Definition definition={verb.definition} />
          </View>
          <View style={styles.exampleContainer}>
            <Examples examples={verb.examples} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Mymodal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'yellow',
    width: '80%',
    height: '90%',
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  colorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  wordsContainer: {
    marginBottom: 10,
  },
  transcriptContainer: {
    marginBottom: 8,
  },
  soundContainer: {
    marginBottom: 8,
  },
  translateContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  imageContainer: {
    width: '80%',
    height: '25%',
    marginHorizontal: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  definitionContainer: {
    paddingHorizontal: 10,
  },
  exampleContainer: {
    paddingHorizontal: 10,
  },
});

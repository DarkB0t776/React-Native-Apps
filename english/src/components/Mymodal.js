import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import ColorButton from './ColorButton';
import WordsRow from './WordsRow';
import TranscriptRow from './TranscriptRow';
import SoundRow from './SoundRow';

const Mymodal = ({hideModal, modalVisible, verb, changeColor}) => {
  if (verb === undefined) return;
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
            <SoundRow />
          </View>
          <View style={styles.translateContainer}>
            <Text style={styles.translation}>{verb.ua.join(', ')}</Text>
          </View>
          <View style={styles.definitionContainer}>
            <Text style={styles.definition}>Визначення:</Text>
            <Text>{verb.definition}</Text>
          </View>
          <View style={styles.exampleContainer}>
            <Text style={styles.example}>Приклади:</Text>
            <Text>{verb.examples.join(' ')}</Text>
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
  translation: {
    color: Colors.translationColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
  definitionContainer: {
    paddingHorizontal: 10,
  },
  definition: {
    color: Colors.highRed,
    fontSize: 18,
    fontWeight: 'bold',
  },
  exampleContainer: {
    paddingHorizontal: 10,
  },
  example: {
    color: Colors.highRed,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

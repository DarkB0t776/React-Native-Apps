import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
const PracticeModal = ({visible, navigation, hideModal, words, setWords}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.backdrop}>
        <View style={styles.content}>
          <View style={styles.practice}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PracticeAll', {words, setWords});
                hideModal();
              }}>
              <Image
                style={styles.image}
                source={require('../../assets/images/university.png')}
              />
              <Text style={styles.text}>Practice</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exams}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Exam', {words, setWords});
                hideModal();
              }}>
              <Image
                style={styles.image}
                source={require('../../assets/images/exam.png')}
              />
              <Text style={styles.text}>Exams</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PracticeModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    backgroundColor: '#A63131',
    width: '90%',
    height: '30%',
    borderRadius: 6,
    justifyContent: 'space-between',
    padding: 10,
  },
  practice: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginTop: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  exams: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    flex: 1,
  },
});

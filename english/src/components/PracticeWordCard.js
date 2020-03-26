import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Images from '../constants/Images';
import Colors from '../constants/Colors';
import MyModal from '../components/Mymodal';
import QuestionIcon from 'react-native-vector-icons/AntDesign';
import PracticeInput from '../components/PracticeInput';

const PracticeWordCard = ({word, done}) => {
  let imageSrc;
  let key = word.infinitive.word;

  const [modal, setModal] = useState(false);
  const [infinitive, setInfinitive] = useState('');
  const [pastSimple, setPasSimple] = useState('');
  const [pastPart, setPastPart] = useState('');

  const hideModal = () => {
    setModal(false);
  };

  if (Images[key]) {
    imageSrc = Images[key].imageSource;
  }

  if (word.infinitive.word === infinitive) {
    done();
  }

  return (
    <View style={styles.card}>
      <MyModal hideModal={hideModal} modalVisible={modal} verb={word} />
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => setModal(true)}>
          <QuestionIcon name="questioncircleo" style={styles.questIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={imageSrc} style={styles.image} />
      </View>
      <Text style={styles.definition}>{word.definition}</Text>
      <Text style={styles.translation}>{word.ua.join(', ')}</Text>
      <View style={styles.inputContainer}>
        <PracticeInput
          value={infinitive}
          onChangeHandler={setInfinitive}
          title="1.INF"
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
    height: '50%',
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
});

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ImagesList from '../components/ImagesList';
import useImages from '../hooks/useImages';

const MainScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [images, onSubmitHandler] = useImages();

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onChange={setTerm}
        onSubmit={() => onSubmitHandler(term)}
      />
      <View style={{ flex: 1 }}>
        <ImagesList navigation={navigation} images={images} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  }
});

export default MainScreen;

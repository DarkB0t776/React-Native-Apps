import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import useImgUrl from '../hooks/useImgUrl';

const ImageScreen = ({ route }) => {
  const { id } = route.params;
  const [imgUrl, getImage] = useImgUrl();

  getImage(id);

  if (!imgUrl) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imgUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  }
});

export default ImageScreen;

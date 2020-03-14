import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

const ImagesList = ({ images, navigation }) => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={images}
        keyExtractor={image => image.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.imageInfo}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Image', { id: item.id })}
              >
                <Image style={styles.image} source={{ uri: item.urls.small }} />
              </TouchableOpacity>
              <View style={styles.info}>
                {item.description ? <Text> {item.description}</Text> : null}
                <Text>Author: {item.user.name}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageInfo: {
    marginBottom: 10,
    alignItems: 'center'
  },
  image: {
    height: 200,
    width: 300,
    marginBottom: 3,
    borderRadius: 6
  },
  info: {
    alignItems: 'center',
    marginHorizontal: 10
  }
});

export default ImagesList;

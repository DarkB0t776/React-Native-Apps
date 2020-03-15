import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const ImagesList = ({ images, navigation }) => {
  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Image', { id: item.id })}
              >
                <Image style={styles.image} source={{ uri: item.urls.thumb }} />
              </TouchableOpacity>
              <View style={styles.info}>
                {item.description ? <Text>{item.description}</Text> : null}
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Author:</Text>
                  {item.user.name}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'center'
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 6,
    marginBottom: 5
  },
  info: {
    alignItems: 'center',
    width: 300
  }
});

export default ImagesList;

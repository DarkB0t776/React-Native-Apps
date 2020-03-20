import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

const VerbsList = ({data, showModal}) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={showModal}>
              <View style={styles.listContainer}>
                <Text style={styles.listItem}>{item.infinitive.word}</Text>
                <Text>|</Text>
                <Text style={styles.listItem}>{item.pastSimple.word}</Text>
                <Text>|</Text>
                <Text style={styles.listItem}>{item.pastPart.word}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default VerbsList;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  listItem: {
    fontSize: 16,
  },
});

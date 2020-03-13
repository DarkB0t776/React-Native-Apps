import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";
import RestaurantDetail from "./RestaurantDetail";

const ResultsList = ({title, restaurants, navigation}) => {

  if(!restaurants.length){
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Restaurant', {id: item.id})}>
              <RestaurantDetail restaurant={item}/>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);
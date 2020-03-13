import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import yelp from "../api/yelp";

const RestaurantShowScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const [restaurant, setRestaurant] = useState(null);

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if(!restaurant){
    return null;
  }

  return <View>
    <Text>{restaurant.name}</Text>
    <FlatList
      data={restaurant.photos}
      keyExtractor={photo => photo}
      renderItem={({item}) => {
        return <Image style={styles.image} source={{uri: item}} />
      }} />
  </View>
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default RestaurantShowScreen
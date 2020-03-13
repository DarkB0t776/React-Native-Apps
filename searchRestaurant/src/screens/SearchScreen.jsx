import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";
import {forSlideLeft} from "react-navigation-stack/src/vendor/TransitionConfigs/HeaderStyleInterpolators";

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter(result => {
      return result.price === price;
    });
  };


  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          restaurants={filterRestaurantsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList
          restaurants={filterRestaurantsByPrice('$$')}
          title="Bit Pricier"
        />
        <ResultsList
          restaurants={filterRestaurantsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
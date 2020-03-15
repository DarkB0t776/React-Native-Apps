import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import ImagesList from '../components/ImagesList';

import { fetchImages } from '../redux/actions/imagesActions';
import { connect } from 'react-redux';

const MainScreen = props => {
  useEffect(() => {
    props.fetchImages();
  }, []);

  let content = (
    <ImagesList images={props.allImages.images} navigation={props.navigation} />
  );

  if (props.allImages.isLoading) {
    content = <ActivityIndicator size='large' />;
  }

  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  }
});

const mapStateToProps = state => {
  return { allImages: state.imagesReducer };
};

export default connect(mapStateToProps, { fetchImages })(MainScreen);

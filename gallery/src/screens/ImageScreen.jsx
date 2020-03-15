import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchImage } from '../redux/actions/imageActions';

const ImageScreen = props => {
  const { id } = props.route.params;
  useEffect(() => {
    props.fetchImage(id);
  }, []);

  let content = (
    <Image source={{ uri: props.image.imageUrl }} style={styles.image} />
  );
  if (props.image.isLoading) {
    content = <ActivityIndicator size='large' />;
  }

  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  }
});

const mapDispatchToProps = dispatch => {
  return {
    fetchImage: id => dispatch(fetchImage(id))
  };
};

const mapStateToProps = state => {
  return {
    image: state.imageReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageScreen);

import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SeriePhoto = ({ image }) => (
  <View style={styles.containerImage}>
    <Image
      source={{ uri: image }}
      style={styles._image}
      resizeMode='cover'
    />
  </View>
);

export default SeriePhoto;

const styles = StyleSheet.create({
  containerImage: {
    aspectRatio: 1,
    width: SCREEN_WIDTH
  },

  _image: {
    width: '100%',
    height: '100%'
  }
});
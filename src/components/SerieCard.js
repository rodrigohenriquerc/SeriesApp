import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SerieCard = ({ item }) => {

  console.log('Item: ', item);

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Image
          source={{ uri: item.img }}
          style={styles._image}
          resizeMode='cover'
        />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </View>
  );
};

export default SerieCard;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_WIDTH / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },

  containerContent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green'
  },

  _image: {
    aspectRatio: 1,
    width: '100%'
  },

  containerTitle: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .85)'
  },

  title: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
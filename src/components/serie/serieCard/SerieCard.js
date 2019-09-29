import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const BORDER_RADIUS = 10;

const SerieCard = ({ item, onPress }) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
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
    </TouchableOpacity>
  );
};

export default SerieCard;

const styles = StyleSheet.create({
  container: {
    width: '50%',
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
    borderRadius: BORDER_RADIUS
  },

  _image: {
    // aspectRatio: 1,
    width: '100%',
    height: '100%',
    borderRadius: BORDER_RADIUS
  },

  containerTitle: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .85)',
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS
  },

  title: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
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

const AddSerieCard = ({ item, onPress }) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.containerContent}>
        <Image
          source={require('../../../../assets/add.png')}
          aspectRatio={1}
          resizeMode='cover'
        />
      </View>
    </TouchableOpacity>
  );
};

export default AddSerieCard;

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
    borderRadius: BORDER_RADIUS,
    backgroundColor: '#363636'
  }
});
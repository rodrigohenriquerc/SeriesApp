import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SerieGender = ({ gender }) => (
  <View style={styles.containerGender}>
    <Text style={styles.gender}>{gender}</Text>
  </View>
);

export default SerieGender;

const styles = StyleSheet.create({
  containerGender: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  gender: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});
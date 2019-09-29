import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SerieRate = ({ rate }) => (
  <View style={styles.containerRate}>
    <Text style={styles.rate}>{rate}</Text>
  </View>
);

export default SerieRate;

const styles = StyleSheet.create({
  containerRate: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  rate: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});
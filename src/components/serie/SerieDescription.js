import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SerieDescription = ({ description }) => (
  <View style={styles.containerDescription}>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default SerieDescription;

const styles = StyleSheet.create({
  containerDescription: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  },

  description: {
    fontSize: 16
  }
});
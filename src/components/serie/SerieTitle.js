import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SerieTitle = ({ title }) => (
  <View style={styles.containerTitle}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default SerieTitle;

const styles = StyleSheet.create({
  containerTitle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  title: {
    fontSize: 32,
    textAlign: 'center',
    textAlignVertical: 'top'
  }
});
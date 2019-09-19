import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import series from '../../series.json';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={series}
          renderItem={({ item }) => (
            <View>
              <Text>{`${item.id} - ${item.title}`}</Text>
            </View>
          )}
          keyExtractor={item => (item.id).toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});
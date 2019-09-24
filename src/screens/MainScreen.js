import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Components.
import SerieCard from '../components/SerieCard';

// Data.
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
            <SerieCard
              item={item}
            />
          )}
          keyExtractor={item => (item.id).toString()}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10
  }
});
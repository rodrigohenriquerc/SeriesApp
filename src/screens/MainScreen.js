import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Components.
import SerieCard from '../components/serie/serieCard/SerieCard';
import AddSerieCard from '../components/serie/serieCard/AddSerieCard';

// Data.
import series from '../../series.json';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onPressSerieCard = serie => {
    this.props.navigation.navigate('Details', { serie: serie });
  }

  goFormScreen = () => {
    this.props.navigation.navigate('Form');
  }

  renderFlatListItem = ({ item }) => {
    if (item.isLast) {
      return (
        <AddSerieCard
          onPress={() => this.goFormScreen()}
        />
      );
    }
    return (
      <SerieCard
        item={item}
        onPress={() => this.onPressSerieCard(item)}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[...series, { isLast: true }]}
          renderItem={data => this.renderFlatListItem(data)}
          keyExtractor={item => item.id}
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
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native';

// Components.
import SerieCard from '../components/serie/serieCard/SerieCard';
import AddSerieCard from '../components/serie/serieCard/AddSerieCard';

// Redux.
import { connect } from 'react-redux';
import { watchSeries } from '../actions';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    console.log('MainScreen did mount.');
    this.props.watchSeries();
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
    const {
      series
    } = this.props;
    if (series === null) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator size='large' />
        </View>
      );
    }
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
  },

  containerLoading: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  const { series } = state;
  if (series === null) {
    return { series };
  }
  const seriesObjects = state.series;
  const seriesKeys = Object.keys(seriesObjects);
  const seriesArray = seriesKeys.map(id => {
    return {
      ...seriesObjects[id],
      id
    }
  });
  return {
    series: seriesArray
  };
};

const mapDispatchToProps = dispatch => ({
  watchSeries: () => dispatch(watchSeries())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
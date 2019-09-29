import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

import SeriePhoto from '../components/serie/SeriePhoto';
import SerieTitle from '../components/serie/SerieTitle';
import SerieGender from '../components/serie/SerieGender';
import SerieRate from '../components/serie/SerieRate';
import SerieDescription from '../components/serie/SerieDescription';

export default class SerieDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: null
    };
  }

  componentDidMount = () => {
    const { params } = this.props.navigation.state;
    const serie = params ? params.serie : null;
    this.setState({
      serie
    });
  }

  render() {
    let { serie } = this.state;
    if (serie) {
      return (
        <ScrollView style={styles.container}>
          <SeriePhoto image={serie.img} />
          <View style={styles.containerContent}>
            <SerieTitle title={serie.title} />
            <View style={styles.containerMoreInfo}>
              <SerieGender gender={serie.gender} />
              <View style={styles.division}>
              </View>
              <SerieRate rate={serie.rate} />
            </View>
            <SerieDescription description={serie.description} />
          </View>
        </ScrollView>
      );
    }
    return <View></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: SCREEN_WIDTH
  },

  _scrollViewContainerContent: {
    alignItems: 'center'
  },

  containerContent: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    padding: 20
  },

  containerMoreInfo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  division: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#000',
    marginHorizontal: 10
  }
});
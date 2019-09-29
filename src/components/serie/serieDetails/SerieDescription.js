import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation,
  NativeModules,
  Platform
} from 'react-native';

if (Platform.OS === 'android') {
  if (NativeModules.UIManager.setLayoutAnimationEnabledExperimental) {
    NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default class SerieDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLines: 3
    };
  }

  toggleNumberOfLines = () => {
    let { numberOfLines } = this.state;
    this.setState({
      numberOfLines: numberOfLines == 3 ? null : 3
    });
  }

  componentWillUpdate = (nextProps, nextState) => {
    LayoutAnimation.spring();
  }

  render() {
    let { numberOfLines } = this.state;
    let { description } = this.props;
    return (
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={() => this.toggleNumberOfLines()}
      >
        <View style={styles.containerDescription}>
          <Text
            style={styles.description}
            numberOfLines={numberOfLines}
          >
            {description}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },

  containerDescription: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  },

  description: {
    fontSize: 16
  }
});
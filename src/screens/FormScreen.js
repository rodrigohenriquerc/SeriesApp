import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';

// Components.
import FormRow from '../components/FormRow';

// Redux.
import { connect } from 'react-redux';
import { setField } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class FormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { serieForm, setField } = this.props;
    return (
      <View style={styles.container}>
        <FormRow first>
          <TextInput
            placeholder='Título'
            style={styles._input}
            value={serieForm.title}
            onChangeText={value => setField('title', value)}
          />
        </FormRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    backgroundColor: '#e0e0e0'
  },

  _input: {
    padding: 5
  }
});

const mapStateToProps = state => {
  return {
    serieForm: state.serieForm
  }
}

const mapDispatchToProps = {
  setField
}

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen);
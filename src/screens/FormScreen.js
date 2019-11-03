import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Picker,
  Slider,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert
} from 'react-native';

// Components.
import FormRow from '../components/FormRow';
import AuthButton from '../components/AuthButton';

// Redux.
import { connect } from 'react-redux';
import {
  setField,
  saveSerie,
  setWholeSerie,
  resetForm
} from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class FormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount = () => {
    const { navigation, setWholeSerie, resetForm } = this.props;
    const { params } = navigation.state;
    if (params && params.serieToEdit) {
      return setWholeSerie(params.serieToEdit);
    }
    return resetForm();
  }

  render() {
    let {
      isLoading
    } = this.state;
    let {
      serieForm,
      setField,
      saveSerie,
      navigation
    } = this.props;
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        contentContainerStyle={styles._containerKeyboardAvoidingView}
        style={styles._keyboardAvoidingView}
        behavior='padding'
        enabled
      >
        <ScrollView
          contentContainerStyle={styles._containerScrollView}
          style={styles._scrollView}
        >
          <FormRow first>
            <TextInput
              placeholder='Título'
              style={styles._input}
              value={serieForm.title}
              onChangeText={value => setField('title', value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              placeholder='URL da imagem'
              style={styles._input}
              value={serieForm.img}
              onChangeText={value => setField('img', value)}
            />
          </FormRow>
          <FormRow>
            <Picker
              selectedValue={serieForm.gender}
              style={styles.picker}
              onValueChange={value =>
                setField('gender', value)
              }>
              <Picker.Item label='Policial' value='Policial' />
              <Picker.Item label='Comédia' value='Comédia' />
              <Picker.Item label='Terror' value='Terror' />
              <Picker.Item label='Ficção Científica' value='Ficção Científica' />
              <Picker.Item label='Drama' value='Drama' />
              <Picker.Item label='Ação' value='Ação' />
            </Picker>
          </FormRow>
          <FormRow>
            <View style={styles.sameRow}>
              <Text>Nota:</Text>
              <Text>{serieForm.rate}</Text>
            </View>
            <Slider
              minimumValue={0}
              maximumValue={100}
              step={5}
              onValueChange={value => setField('rate', value)}
              value={serieForm.rate}
            />
          </FormRow>
          <FormRow last>
            <TextInput
              placeholder='Descrição'
              style={styles._input}
              value={serieForm.description}
              onChangeText={value => setField('description', value)}
              numberOfLines={4}
              multiline={true}
            />
          </FormRow>
          {isLoading ? (
            <View style={styles.containerLoading}>
              <ActivityIndicator />
            </View>
          ) : (
              <AuthButton
                title='Salvar'
                handleEvent={async () => {
                  this.setState({
                    isLoading: true
                  });
                  try {
                    await saveSerie(serieForm)
                    navigation.goBack();
                  }
                  catch (error) {
                    Alert.alert('Erro', error.message);
                  }
                  finally {
                    this.setState({
                      isLoading: false
                    });
                  }
                }}
              />
            )}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  _containerKeyboardAvoidingView: {
    flexGrow: 1
  },

  _keyboardAvoidingView: {
    flexGrow: 1
  },

  _containerScrollView: {
    flexGrow: 1
  },

  _scrollView: {
    flexGrow: 1,
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    backgroundColor: '#e0e0e0'
  },

  _input: {
    padding: 5
  },

  picker: {
    width: '100%',
    height: 25
  },

  sameRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },

  containerLoading: {
    width: '100%',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {
    serieForm: state.serieForm
  }
}

const mapDispatchToProps = {
  setField,
  saveSerie,
  setWholeSerie,
  resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen);
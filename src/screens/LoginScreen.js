import React from 'react';
import { Text, TextInput, StyleSheet, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';

import FormRow from '../components/FormRow';
import AuthButton from '../components/AuthButton';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      message: ''
    }
  }

  componentDidMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBqUC26A9XxTYNGXF-lzfgyyqhSbYNOx8I",
      authDomain: "series-eeb87.firebaseapp.com",
      databaseURL: "https://series-eeb87.firebaseio.com",
      projectId: "series-eeb87",
      storageBucket: "",
      messagingSenderId: "272660421192",
      appId: "1:272660421192:web:d3660a379b5d5b3a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    });
  }

  tryLogin = () => {
    this.setState({
      isLoading: true,
      message: ''
    });
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({
          message: 'Sucesso!'
        })
      })
      .catch(error => {
        this.setState({
          message: this.getMessageByErrorCode(error.code)
        });
      })
      .then(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'Usuário não encontrado.';
      case 'auth/wrong-password':
        return 'Senha incorreta.';
      default:
        return 'Erro desconhecido';
    }
  }

  renderMessage() {
    if (!this.state.message) {
      return null;
    }

    return <Text>{this.state.message}</Text>;
  }

  renderButton() {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator animating={this.state.isLoading} size='small' />
      );
    }

    return (
      <AuthButton
        title='Login'
        handleEvent={() => this.tryLogin()}
      />
    );
  }

  navigateToRegisterScreen = (firebaseConfig) => {
    this.props.navigation.navigate('Register', firebaseConfig);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <Text style={styles.title}>Login</Text>
        <FormRow first>
          <TextInput
            placeholder='Email'
            style={styles.input}
            value={this.state.email}
            onChangeText={value => this.onChangeHandler('email', value)}
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCapitalize='none'
          />
        </FormRow>
        <FormRow last>
          <TextInput
            placeholder='Senha'
            style={styles.input}
            secureTextEntry
            value={this.state.password}
            onChangeText={value => this.onChangeHandler('password', value)}
            keyboardType='default'
            textContentType='password'
          />
        </FormRow>
        {this.renderButton()}
        {this.renderMessage()}
        <AuthButton
          title='Registre-se'
          second
          handleEvent={() => this.navigateToRegisterScreen()}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 35
  },
  input: {
    padding: 5
  }
});
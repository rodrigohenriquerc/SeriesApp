import React, { Component } from 'react';
import Router from './Router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import devToolsEnhancer from 'remote-redux-devtools';

import Reactotron from 'reactotron-react-native'

import rootReducer from './reducers';

const store = createStore(rootReducer, devToolsEnhancer());

export default class SeriesApp extends Component {
  componentDidMount() {
    Reactotron
      .configure() // controls connection & communication settings
      .useReactNative() // add all built-in react native plugins
      .connect() // let's connect!
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
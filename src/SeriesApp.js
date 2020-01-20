import React, { Component } from 'react';
import { YellowBox } from 'react-native';

// Router.
import Router from './Router';

// Redux.
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

YellowBox.ignoreWarnings(['Setting a timer']);

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

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
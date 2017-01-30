import React, { Component } from 'react';

import './App.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoApp from './container';
import reducer from './reducer'

const logger = createLogger();
let store = createStore(reducer,
    applyMiddleware(thunk, logger)
  )

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <TodoApp />
        </ MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;

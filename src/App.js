import React, { Component } from 'react';

import './App.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import createEngine from 'redux-storage-engine-localstorage';
import { createMiddleware, createLoader } from 'redux-storage'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoApp from './container';
import reducer from './reducer'

const engine = createEngine('todoApp');
const middleware = createMiddleware(engine)
const logger = createLogger();
let store = createStore(reducer,
    applyMiddleware(thunk, logger, middleware)
  )

const load = createLoader(engine);
load(store)
  .then((newState) => console.log('Loaded state:', newState))
  .catch(() => console.log('Failed to load previous state'));

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

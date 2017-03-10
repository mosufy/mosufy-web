/**
 * Main ReactJS app
 *
 * @date 11/3/2017
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import App from './reducers/index';
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';

// create store with persisted state using localStorage
let persistedState = loadState();
let store = createStore(App, persistedState, applyMiddleware(thunk));

// subscribe to state changes
// throttle added to only persist to localStorage at 1s interval
store.subscribe(throttle(() => {
  saveState({
    // Add more state objects as required for persistence
    // example > todos: store.getState().todos
  })
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
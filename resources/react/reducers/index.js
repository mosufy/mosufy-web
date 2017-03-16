/**
 * index.js
 *
 * Binds all of our reducers into a single reducer that can be imported.
 * A reducer takes an existing state, executes the action and returns the new state.
 *
 * @date 11/3/2017
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 */

import {combineReducers} from 'redux';
import portfolios from './portfolios';
import portfolioCategory from './portfolioCategory';

const App = combineReducers({
  portfolios,
  portfolioCategory
});

export default App;
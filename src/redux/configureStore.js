/** @format */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  missions: missionReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;

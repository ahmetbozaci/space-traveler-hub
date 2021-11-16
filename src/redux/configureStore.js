/** @format */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { ReducerRocket } from './rocketReducer/RocketReducer';
import { fetchRockets } from './rocketReducer/RocketAction';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  ReducerRocket,
  missions: missionReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchRockets());

export default store;

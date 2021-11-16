import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { ReducerRocket } from './rocketReducer/RocketReducer';
import { fetchRockets } from './rocketReducer/RocketAction';

const rootReducer = combineReducers({
  ReducerRocket,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchRockets());

export default store;

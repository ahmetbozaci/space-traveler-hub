import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;

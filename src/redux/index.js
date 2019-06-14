import { combineReducers } from 'redux';

import configureStore from '../configureStore';
import rootSaga from '../saga';

const rootReducer = combineReducers({
  movieData: require('./MovieListReducer').reducer,

});

export const { store } = configureStore({}, rootReducer, rootSaga);

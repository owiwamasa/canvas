import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import artistPageReducer from './artistPage';
import errorReducer from './errors';
import userReducer from './user';
import postReducer from './post';
import jobReducer from './job';

const rootReducer = combineReducers({
  session,
  artistPageReducer,
  errorReducer,
  userReducer,
  postReducer,
  jobReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import getHomePageSaga from '@containers/HomePage/saga';

import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  // enable Redux Dev Tools if installed
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  // define individual middlewares
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // create middlewares array & apply them
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  // it's alive!
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  // applying extensions
  store.runSaga = sagaMiddleware.run;

  // running sagas
  store.runSaga(getHomePageSaga);

  return store;
}

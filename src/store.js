import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// import reducers (ctrl+f "SETUP REDUCERS")
import homePageReducer from '@containers/HomePage/reducer';

// import sagas (ctrl+f "SETUP SAGAS")
import getHomePageSaga from '@containers/HomePage/saga';

function createReducer(injectedReducers = {}) {
  // SETUP REDUCERS HERE
  const rootReducer = combineReducers({
    homePage: homePageReducer,
    ...injectedReducers,
  });

  return rootReducer;
}

// main redux config function that's passed back to app.js
export default function configureStore() {
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
    {},
    composeEnhancers(...enhancers),
  );

  // applying extensions
  store.runSaga = sagaMiddleware.run;

  // SETUP SAGAS HERE
  store.runSaga(getHomePageSaga);

  return store;
}

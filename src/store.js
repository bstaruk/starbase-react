import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import history from 'utils/history';

// import reducers (ctrl+f "SETUP REDUCERS")
import statsPageReducer from 'containers/StatsPage/reducer';

// import sagas (ctrl+f "SETUP SAGAS")
import getStatsPageSaga from 'containers/StatsPage/saga';

function createReducer(injectedReducers = {}) {
  // SETUP REDUCERS HERE
  const rootReducer = combineReducers({
    router: connectRouter(history),
    statsPage: statsPageReducer,
    ...injectedReducers,
  });

  return rootReducer;
}

// main redux config function that's passed back to app.js
export default function configureStore(routerHistory) {
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
  const middlewares = [sagaMiddleware, routerMiddleware(routerHistory)];
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
  store.runSaga(getStatsPageSaga);

  return store;
}

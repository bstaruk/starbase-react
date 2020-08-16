import { combineReducers } from 'redux';

import homePageReducer from '@containers/HomePage/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    homePage: homePageReducer,
    ...injectedReducers,
  });

  return rootReducer;
}

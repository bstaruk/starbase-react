import produce from 'immer';
import {
  GET_REPO_DETAILS,
  GET_REPO_DETAILS_ERROR,
  GET_REPO_DETAILS_SUCCESS,
} from './constants';

export const initialState = {
  repoDetails: {},
  repoDetailsError: '',
  repoDetailsLoaded: false,
};

/* eslint-disable default-case, no-param-reassign */
const statsPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_REPO_DETAILS:
        draft.repoDetails = initialState.repoDetails;
        draft.repoDetailsError = initialState.repoDetailsError;
        draft.repoDetailsLoaded = initialState.repoDetailsLoaded;
        break;

      case GET_REPO_DETAILS_SUCCESS:
        draft.repoDetails = action.payload;
        draft.repoDetailsLoaded = true;
        break;

      case GET_REPO_DETAILS_ERROR:
        draft.repoDetailsError = action.payload;
        draft.repoDetailsLoaded = false;
        break;
    }
  });

export default statsPageReducer;

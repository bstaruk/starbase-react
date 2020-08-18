import produce from 'immer';
import {
  GET_REPO_DETAILS,
  GET_REPO_DETAILS_ERROR,
  GET_REPO_DETAILS_SUCCESS,
} from './constants';

export const initialState = {
  repoDetails: {},
  repoDetailsLoaded: false,
};

/* eslint-disable default-case, no-param-reassign */
const statsPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_REPO_DETAILS:
        draft.repoDetails = {};
        draft.repoDetailsLoaded = false;
        break;

      case GET_REPO_DETAILS_SUCCESS:
        draft.repoDetails = action.payload;
        draft.repoDetailsLoaded = true;
        break;

      case GET_REPO_DETAILS_ERROR:
        draft.repoDetails = {};
        draft.repoDetailsLoaded = true;
        break;
    }
  });

export default statsPageReducer;

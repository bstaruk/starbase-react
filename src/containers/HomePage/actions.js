import {
  GET_REPO_DETAILS,
  GET_REPO_DETAILS_SUCCESS,
  GET_REPO_DETAILS_ERROR,
} from './constants';

export function getRepoDetailsAction({ owner, repo }) {
  return {
    type: GET_REPO_DETAILS,
    owner,
    repo,
  };
}

export function getRepoDetailsSuccessAction(payload) {
  return {
    type: GET_REPO_DETAILS_SUCCESS,
    payload,
  };
}

export function getRepoDetailsErrorAction(error) {
  return {
    type: GET_REPO_DETAILS_ERROR,
    payload: error,
  };
}

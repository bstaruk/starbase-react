import { all, call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';

import { GET_REPO_DETAILS } from './constants';
import {
  getRepoDetailsErrorAction,
  getRepoDetailsSuccessAction,
} from './actions';

export function* getRepoDetailsSaga({ owner, repo }) {
  try {
    const details = yield call(
      request,
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        method: 'GET',
      },
    );

    yield put(getRepoDetailsSuccessAction(details));
  } catch {
    yield put(getRepoDetailsErrorAction());
  }
}

export default function* homePageSaga() {
  yield all([takeLatest(GET_REPO_DETAILS, getRepoDetailsSaga)]);
}
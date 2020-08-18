import { all, call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

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

    yield put(
      getRepoDetailsSuccessAction({
        name: details.name,
        description: details.description,
        htmlUrl: details.html_url,
        stargazersCount: details.stargazers_count,
        forksCount: details.forks_count,
      }),
    );
  } catch ({ json, status }) {
    if (json) {
      const data = yield json;
      yield put(getRepoDetailsErrorAction(data.message || 'Error!'));
    } else {
      yield put(getRepoDetailsErrorAction('Error!'));
    }
  }
}

export default function* statsPageSaga() {
  yield all([takeLatest(GET_REPO_DETAILS, getRepoDetailsSaga)]);
}

import { all, put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { actions } from './slice';

export function* setCountSaga({ payload }: AnyAction) {
  yield put(actions.setCountSuccess(payload));
}

export function* counterSaga() {
  yield all([takeLatest(actions.setCount.type, setCountSaga)]);
}

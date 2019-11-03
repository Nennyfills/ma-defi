import { all } from 'redux-saga/effects';

import { watchUserDataRequests } from './modules/formData';

export default function* rootSaga() {
  yield all([
    watchUserDataRequests,
  ]);
}

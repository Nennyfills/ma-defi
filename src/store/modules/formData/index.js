import { call, takeLatest, put } from 'redux-saga/effects';

import {
  REQUEST_USER_DATA_SUCCESS,
  REQUEST_USER_DATA,
  GET_USER_DATA_ERROR,
} from './types';
import API from './request';


export const requestUserData = (payload) => ({ type: REQUEST_USER_DATA, payload });
export const requestUserDataSuccess = (payload) => ({ type: REQUEST_USER_DATA_SUCCESS, payload });
export const getUserDataError = (payload) => ({ type: GET_USER_DATA_ERROR, payload });

export function* fetchData(action) {
  try {
    const Result = yield call(API.getData, action.payload);

    yield put(requestUserDataSuccess(Result.data));
  } catch (error) {
    yield put(getUserDataError(error));
  }
}

export function* watchUserDataRequests() {
  yield takeLatest(requestUserData, fetchData);
}

const initialState = {
  data: [],
  errors: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_DATA:
      return {
        ...state,
        errors: null,
        loading: true,
      };
    case REQUEST_USER_DATA_SUCCESS:
      return {
        data: action.payload,
        errors: null,
        loading: false,
      };
    case GET_USER_DATA_ERROR:
      return {
        user: {},
        errors: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

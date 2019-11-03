import { runSaga } from 'redux-saga';
import sinon from 'sinon';

import API from './request';
import {
  fetchData,
  requestUserData,
  requestUserDataSuccess,
  getUserDataError,
} from './index';

import {
  REQUEST_USER_DATA_SUCCESS,
  REQUEST_USER_DATA,
  GET_USER_DATA_ERROR,
} from './types';

describe('Get formData action', () => {
  beforeEach(() => {
    if (API.getData.restore) API.getData.restore();
  });

  it('should get form with users data ', async () => {
    const dispatched = [];
    const postStub = sinon.stub(API, 'getData').resolves({
      data: 'just getting data',
    });
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchData,
      requestUserDataSuccess(),
    ).toPromise();
    expect(postStub.calledOnce).toEqual(true);
    expect(dispatched[0].type).toEqual(REQUEST_USER_DATA_SUCCESS);
    expect(dispatched[0].payload).toEqual('just getting data');
  });

  it('should not get user form when an error have occurred', async () => {
    const dispatched = [];
    const errors = new Error('Request failed');
    const postStub = sinon.stub(API, 'getData').rejects(errors);
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchData,
      getUserDataError(),
    ).toPromise();
    expect(postStub.calledOnce).toEqual(true);
    expect(dispatched[0].type).toEqual(GET_USER_DATA_ERROR);
    expect(dispatched[0].payload).toBeInstanceOf(Error);
  });

  it('should check if the formData loading action is been dispatched', async () => {
    const payload = { name: 'will' };
    const newAction = requestUserData(payload);

    expect(newAction.type).toEqual(REQUEST_USER_DATA);
    expect(newAction.payload.name).toEqual('will');
  });

  it('should check if the formData error request action is been dispatched', async () => {
    const payload = { errors: 'failed' };
    const newAction = getUserDataError(payload);

    expect(newAction.type).toEqual(GET_USER_DATA_ERROR);
    expect(newAction.payload.errors).toEqual('failed');
  });

  it('should check if request user data success action is been dispatched', async () => {
    const payload = { name: 'leo' };
    const newAction = requestUserDataSuccess(payload);

    expect(newAction.type).toEqual(REQUEST_USER_DATA_SUCCESS);
    expect(newAction.payload.name).toEqual('leo');
  });

  it('should check if API is working well', async () => {
    const payload = { name: 'leo' };
    const newAction = API.getData(payload);

    expect(newAction).toBeInstanceOf(Promise);
  });
});

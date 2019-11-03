import mainReducer, {
  requestUserData,
  requestUserDataSuccess,
  getUserDataError,
} from './index';

describe('Reducers', () => {
  it('should check if reducer is loading while getting formData', async () => {
    const initialState = {
      data: [],
      loading: false,
      errors: null,
    };
    const newState = mainReducer(initialState, requestUserData());
    expect(newState.data).toEqual([]);
    expect(newState.loading).toEqual(true);
  });
  it('should check if reducer is getting a users formData', async () => {
    const initialState = {
      data: [],
      loading: false,
      errors: null,
    };
    const payload = {
      userName: 'apple',
    };
    const newState = mainReducer(initialState, requestUserDataSuccess(payload));
    expect(newState.data.userName).toEqual('apple');
    expect(newState.loading).toEqual(false);
  });

  it('should check if reducer is getting an error while receiving formData detail', async () => {
    const initialState = {
      data: [],
      loading: false,
      errors: null,
    };
    const errorPayload = {
      userDetail: [],
      error: 'failure',
    };
    const newState = mainReducer(initialState, getUserDataError(errorPayload));
    expect(newState.errors.error).toEqual('failure');
    expect(newState.loading).toEqual(false);
  });
});

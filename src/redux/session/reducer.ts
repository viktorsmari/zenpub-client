import * as Sess from '.';
import { Reducer } from 'redux';

export const defaultInitialState: Sess.State = {
  auth: null
};

export const reducer = (
  initialState = defaultInitialState
): Reducer<Sess.State> => (old = initialState, action) => {
  if (Sess.login.is(action)) {
    return {
      auth: action.payload
    };
  } else if (Sess.logout.is(action)) {
    return {
      auth: null
    };
  }
  return old;
};

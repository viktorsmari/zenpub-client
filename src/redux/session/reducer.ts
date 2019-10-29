import * as Sess from '.';
import { Reducer } from 'redux';

export const defaultInitialState: Sess.State = {
  user: null
};

export const reducer = (
  initialState = defaultInitialState
): Reducer<Sess.State> => (old = initialState, action) => {
  if (Sess.login.is(action)) {
    return {
      user: action.payload
    };
  } else if (Sess.logout.is(action)) {
    return {
      user: null
    };
  }
  return old;
};

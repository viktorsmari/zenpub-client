import * as Sess from '.';
import { Reducer } from 'redux';

export const initial: Sess.State = {
  user: null
};

export const reducer: Reducer<Sess.State> = (old = initial, action) => {
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

import { Middleware } from 'redux';
import * as Sess from '.';
import { LOCAL_STORAGE_SESSION } from '../../constants';

export const createSessionMW = (): Middleware => store => next => {
  return action => {
    if (Sess.login.is(action)) {
      localStorage.setItem(LOCAL_STORAGE_SESSION, strng(action.payload));
    } else if (Sess.logout.is(action)) {
      localStorage.removeItem(LOCAL_STORAGE_SESSION);
    }
    return next(action);
  };
};

export const getCachedSession = (): Sess.User =>
  parse(localStorage.getItem(LOCAL_STORAGE_SESSION));

const strng = (_: any) => JSON.stringify(_);
const parse = (_: string | null, def = undefined) => {
  if (_ === null) {
    return _;
  }
  try {
    return JSON.parse(_);
  } catch (e) {
    return def;
  }
};

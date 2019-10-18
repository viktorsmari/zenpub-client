import { Middleware } from 'redux';
import { setToken } from '../../gql/actions';
import * as Sess from '../session';

const LOCAL_STORAGE_SESSION_KEY = 'MOO_LOCAL_STORAGE_SESSION';
export const createSessionMW = (): Middleware => store => next => {
  return action => {
    if (Sess.login.is(action)) {
      localStorage.setItem(LOCAL_STORAGE_SESSION_KEY, strng(action.payload));
      //TODO this setToken action should be in a separate integration(Session-GQL) middleware
      store.dispatch(
        setToken.create((action.payload && action.payload.token) || '')
      );
    } else if (Sess.logout.is(action)) {
      localStorage.removeItem(LOCAL_STORAGE_SESSION_KEY);
      //TODO this setToken action should be in a separate integration(Session-GQL) middleware
      store.dispatch(setToken.create(''));
    }
    return next(action);
  };
};

export const getCachedSession = (): Sess.User =>
  parse(localStorage.getItem(LOCAL_STORAGE_SESSION_KEY));

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

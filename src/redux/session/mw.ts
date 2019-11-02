import { Middleware } from 'redux';
import * as Sess from '.';
import { KVStore } from '../../util/keyvaluestore/types';
import { State, User } from './types';

const SESSION_KEY = 'ME';

interface Srv {
  mw: Middleware;
  initialState: State;
}
export const createSessionMW = (kvstore: KVStore): Srv => {
  const getStoredUser = (): User => kvstore.get(SESSION_KEY);
  const delStoredUser = (): User => kvstore.del(SESSION_KEY);
  const setStoredUser = (user: User): void => kvstore.set(SESSION_KEY, user);
  const mw: Middleware = store => next => {
    return action => {
      if (Sess.login.is(action)) {
        setStoredUser(action.payload);
      } else if (Sess.logout.is(action)) {
        delStoredUser();
      }
      return next(action);
    };
  };
  const initialState: State = {
    user: getStoredUser()
  };
  return {
    mw,
    initialState
  };
};

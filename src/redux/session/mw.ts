import { Middleware, Reducer, AnyAction } from 'redux';
import * as Session from './';
import { KVStore } from '../../util/keyvaluestore/types';

const SESSION_KEY = 'Auth';

interface SessionSrv {
  mw: Middleware;
  reducer: Reducer<Session.State, AnyAction>;
}
export const createSessionMW = (kvstore: KVStore): SessionSrv => {
  const getStoredUser = (): Session.SessionUser | null =>
    kvstore.get(SESSION_KEY);
  const delStoredUser = (): Session.SessionUser | null =>
    kvstore.del(SESSION_KEY);
  const setStoredUser = (me: Session.SessionUser): void =>
    kvstore.set(SESSION_KEY, me);
  const mw: Middleware = store => next => {
    return action => {
      if (Session.login.is(action)) {
        setStoredUser(action.payload);
      } else if (Session.logout.is(action)) {
        delStoredUser();
      }
      return next(action);
    };
  };
  const initialState: Session.State = {
    me: getStoredUser()
  };
  const reducer = Session.reducer(initialState);
  return {
    mw,
    reducer
  };
};

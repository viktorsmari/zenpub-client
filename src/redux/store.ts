import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
  Store
} from 'redux';
import { createSessionMW } from './session';
import * as session from './session';
import { CreateKVStore } from '../util/keyvaluestore/types';

export type State = ReturnType<typeof createAppStore> extends Store<infer S>
  ? S
  : never;

interface Cfg {
  createLocalKVStore: CreateKVStore;
}
export const createAppStore = ({ createLocalKVStore }: Cfg) => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
  // const __DEV__ = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

  const Session = createSessionMW(createLocalKVStore('SESSION#'));

  const enhancer = composeEnhancers(applyMiddleware(Session.mw));

  const reducer = combineReducers({
    session: session.reducer(Session.initialState)
  });

  const store = createStore(reducer, enhancer);

  return store;
};

export default createAppStore;

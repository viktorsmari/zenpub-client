import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store
} from 'redux';
import { KVStore } from '../util/keyvaluestore/types';
import { createSessionMW } from './session';
import { ToastMiddleware } from './toastMsgs';
import { createLocalizationMW } from './localization';

export type State = ReturnType<typeof createAppStore> extends Store<infer S>
  ? S
  : never;

interface Cfg {
  localKVStore: KVStore;
}
export const createAppStore = ({ localKVStore }: Cfg) => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
  // const __DEV__ = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

  const Session = createSessionMW(localKVStore);
  const Localization = createLocalizationMW(localKVStore);

  const enhancer = composeEnhancers(
    applyMiddleware(Session.mw, ToastMiddleware)
  );

  const reducer = combineReducers({
    session: Session.reducer
  });

  const store = createStore(reducer, enhancer);

  return store;
};

export default createAppStore;

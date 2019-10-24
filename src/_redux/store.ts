import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { createSessionMW, getCachedSession } from './session';
import * as pages from '../pages/redux';
import * as session from './session';
import { login } from './session';

export type State = ReturnType<typeof reducer>;
const reducer = combineReducers({
  pages: pages.reducer,
  session: session.reducer
});

export default () => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
  // const __DEV__ = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  const enhancer = composeEnhancers(applyMiddleware(createSessionMW()));

  const store = createStore(reducer, enhancer);

  const user = getCachedSession();
  store.dispatch(login.create(user));

  return store;
};

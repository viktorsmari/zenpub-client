import { applyMiddleware, combineReducers, createStore } from 'redux';
import { GqlSdkMiddleware } from '../gql/gql';
import * as pages from '../pages/redux';

const gqlMW = GqlSdkMiddleware();
export type State = ReturnType<typeof reducer>;
const reducer = combineReducers({
  pages: pages.reducer
});
export const store = createStore(reducer, applyMiddleware(gqlMW));
export default store;

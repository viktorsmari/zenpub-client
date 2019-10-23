import { Reducer } from 'redux';
import { gqlResponse } from '../../gql/actions';
import { Data, THREAD_PAGE_GQL_REPLY } from './types';

const initialState: State = {
  thread: null,
  refreshing: null
};
export const reducer: Reducer<State> = (old = initialState, action) => {
  if (
    gqlResponse.is(action) &&
    action.payload.replyTo === THREAD_PAGE_GQL_REPLY
  ) {
    if (action.payload.resp.getThread) {
      const resp = action.payload.resp.getThread;
      const next: State = {
        ...old,
        thread: resp,
        refreshing: resp.loading ? old.thread : resp
      };
      return next;
    } else if (!action.payload.loading) {
      const next: State = {
        ...old,
        thread: null
      };
      return next;
    }
  }
  return old;
};

export type State = {
  thread: Data | null;
  refreshing: Data | null;
};

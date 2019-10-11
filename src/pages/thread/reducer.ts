import { Reducer } from 'redux';
import { gqlResponse } from '../../gql/actions';
import { GET_THREAD_REPLY, Data } from './types';

const initialState: State = {
  thread: {
    loading: true
  }
};
export const reducer: Reducer<State> = (old = initialState, action) => {
  if (
    gqlResponse.is(action) &&
    action.payload.replyTo === GET_THREAD_REPLY &&
    action.payload.resp.getThread
  ) {
    const resp = action.payload.resp.getThread;
    const next: State = {
      ...old,
      thread: {
        ...resp,
        loading: false
      }
    };
    return next;
  }
  return old;
};

export interface State {
  thread: Data;
}

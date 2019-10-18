import { Reducer } from 'redux';
import { gqlResponse } from '../../gql/actions';
import { GET_THREAD_REPLY, Data, REPLY_THREAD_REPLY } from './types';

const initialState: State = {
  thread: null
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
      thread: resp
    };
    return next;
  } else if (
    gqlResponse.is(action) &&
    action.payload.replyTo === REPLY_THREAD_REPLY &&
    action.payload.resp.createReplyMutation &&
    !action.payload.resp.createReplyMutation.loading
  ) {
    const next: State = initialState;
    return next;
  }
  return old;
};

export interface State {
  thread: Data | null;
}

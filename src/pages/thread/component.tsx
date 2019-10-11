import React, { useContext, useCallback, useEffect } from 'react';
import { StoreCtx } from '../../redux/storeProvider';
import * as C from './';
import { gqlRequest } from '../../gql/actions';
import { GET_THREAD_REPLY } from './types';
import Stateless from './stateless';
export interface Props {
  id: number;
}
export const Thread: React.FC<Props> = ({ id }) => {
  const { state, dispatch } = useContext(StoreCtx);

  const {
    pages: {
      thread: { thread }
    }
  } = state;
  const replyThread = useCallback(
    (text: string) => dispatch(C.replyThread.create({ text: text })),
    [dispatch]
  );
  useEffect(
    () => {
      dispatch(
        gqlRequest.create({
          replyTo: GET_THREAD_REPLY,
          op: { getThread: [{ id }] }
        })
      );
    },
    [id]
  );

  return <Stateless {...{ thread, replyThread }} />;
};

export default Thread;

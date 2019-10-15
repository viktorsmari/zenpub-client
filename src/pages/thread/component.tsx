import React, { useContext, useCallback, useEffect } from 'react';
import { StoreCtx } from '../../redux/storeProvider';
import * as C from './';
import { gqlRequest } from '../../gql/actions';
import { GET_THREAD_REPLY } from './types';
import Stateless from './stateless_ok';
export interface Props {
  id: number;
}
export const Thread: React.FC<Props> = ({ id }) => {
  const { state, dispatch } = useContext(StoreCtx);

  const {
    pages: {
      thread: { data: thread }
    }
  } = state;
  const selectThread = useCallback(
    (n: number) => dispatch(C.selectThread.create({ thing: n })),
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

  return <Stateless {...{ thread, selectThread }} />;
};

export default Thread;

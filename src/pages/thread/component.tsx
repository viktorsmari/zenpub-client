import React, { useContext, useCallback, useEffect } from 'react';
import { StoreCtx } from '../../redux/storeProvider';
import * as C from './';
import { gqlRequest } from '../../gql/actions';
import { GET_THREAD_REPLY } from './types';
export interface Props {
  id: number;
}
export const Thread: React.FC<Props> = ({ id }) => {
  const { state, dispatch } = useContext(StoreCtx);

  const {
    pages: {
      thread: { data }
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

  return <Fake {...{ data, selectThread }} />;
};
const Fake: React.FC<C.Props> = props => (
  <pre>{JSON.stringify(props, null, 2)}</pre>
);
export default Thread;

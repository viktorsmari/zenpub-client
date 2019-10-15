import React, { useContext, useEffect } from 'react';
import { StateContext } from '../../_context/stateCtx';
import { ActionContext } from '../../_context/actionCtx';
import { gqlRequest } from '../../gql/actions';
import { GET_THREAD_REPLY } from './types';
import Stateless from './stateless';
export interface Props {
  id: number;
}
export const Thread: React.FC<Props> = ({ id }) => {
  const {
    pages: {
      thread: { thread }
    }
  } = useContext(StateContext);
  const { dispatch } = useContext(ActionContext);
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

  return <Stateless {...{ thread }} />;
};

export default Thread;

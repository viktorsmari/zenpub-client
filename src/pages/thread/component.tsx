import React from 'react';
import Stateless from './stateless';
import { useInterceptor } from '../../context/global/apolloInterceptorCtx';
import { toast } from 'react-toastify';
import { BLOCK_REQUEST } from '../../apollo/client';
import { useGetThreadQuery } from '../../graphql/generated/getThread.generated';
export interface Props {
  id: number;
}
export const Thread: React.FC<Props> = ({ id }) => {
  const threadQuery = useGetThreadQuery({ variables: { id } });
  useInterceptor({
    operation: 'undoLikeComment',
    request: () => () => threadQuery.refetch()
  });
  useInterceptor({
    operation: 'likeComment',
    request: () => () => threadQuery.refetch()
  });
  useInterceptor({
    operation: 'createReply',
    request: () => resp => {
      resp && resp !== BLOCK_REQUEST && toast('Reply sent!');
      threadQuery.refetch();
    }
  });

  return <Stateless threadQuery={threadQuery} />;
};

export default Thread;

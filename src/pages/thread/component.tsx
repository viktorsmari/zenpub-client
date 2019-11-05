import React from 'react';
import { useInterceptor } from '../../context/global/apolloInterceptorCtx';
import { useGetThreadQuery } from '../../graphql/generated/getThread.generated';
import Stateless from './stateless';
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
    request: () => () => threadQuery.refetch()
  });

  return <Stateless threadQuery={threadQuery} />;
};

export default Thread;

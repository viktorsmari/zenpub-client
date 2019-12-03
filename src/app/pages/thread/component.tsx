import React from 'react';
import { useInterceptor } from '../../context/global/apolloInterceptorCtx';
import { useGetThreadQuery } from '../../../common/graphql/generated/getThread.generated';
import Stateless from './stateless';
export interface Props {
  threadId: string;
}
export const Thread: React.FC<Props> = ({ threadId }) => {
  const threadQuery = useGetThreadQuery({ variables: { threadId } });
  useInterceptor({
    operation: 'delete',
    request: () => () => threadQuery.refetch()
  });
  useInterceptor({
    operation: 'like',
    request: () => () => threadQuery.refetch()
  });
  useInterceptor({
    operation: 'createReply',
    request: () => () => threadQuery.refetch()
  });

  return <Stateless threadQuery={threadQuery} />;
};

export default Thread;

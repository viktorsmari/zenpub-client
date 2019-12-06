import React from 'react';
import { CreateReplyMutationMutationOperation } from '../../graphql/generated/createReply.generated';
import { DeleteMutationMutationOperation } from '../../graphql/generated/delete.generated';
import { useGetThreadQuery } from '../../graphql/generated/getThread.generated';
import { LikeMutationMutationOperation } from '../../graphql/generated/like.generated';
import { useDynamicLinkOpResult } from '../../util/apollo/dynamicLink';
import Stateless from './stateless';
export interface Props {
  threadId: string;
}
export const Thread: React.FC<Props> = ({ threadId }) => {
  const threadQuery = useGetThreadQuery({ variables: { threadId } });

  useDynamicLinkOpResult<CreateReplyMutationMutationOperation>(
    'createReplyMutation',
    () => {
      threadQuery.refetch();
    },
    [threadQuery.refetch]
  );
  useDynamicLinkOpResult<LikeMutationMutationOperation>(
    'likeMutation',
    () => {
      threadQuery.refetch();
    },
    [threadQuery.refetch]
  );
  useDynamicLinkOpResult<DeleteMutationMutationOperation>(
    'deleteMutation',
    () => {
      threadQuery.refetch();
    },
    [threadQuery.refetch]
  );

  return <Stateless threadQuery={threadQuery} />;
};

export default Thread;

import { Community } from 'graphql/types.generated';
import { CommunityPageThreadsCtx } from 'HOC/pages/community/CommunityPageThreads';
import { ComunityPageThreadFragment } from 'HOC/pages/community/CommunityPageThreads.generated';
import React, { FC, useCallback, useEffect, useMemo } from 'react';
import * as GQL from './CommunityPageThreads.generated';

export interface Props {
  communityId: Community['id'];
}

export const CommunityPageThreadsCtxProvider: FC<Props> = ({
  communityId,
  children
}) => {
  const communityQ = GQL.useCommunityPageThreadsQuery({
    variables: { communityId }
  });
  const [likeMut, likeMutStatus] = GQL.useCommunityPageThreadLikeMutation();
  const [
    unlikeMut,
    unlikeMutStatus
  ] = GQL.useCommunityPageThreadUnlikeMutation();
  const [
    createReplyMut,
    createReplyMutStatus
  ] = GQL.useCommunityPageThreadCreateReplyMutation();

  useEffect(() => {
    communityQ.refetch();
  }, []);

  const threads = useMemo<CommunityPageThreadsCtx['threads']>(
    () =>
      (communityQ.data?.community?.threads?.edges || [])
        .map(threadEdge => threadEdge?.node)
        .filter((_): _ is ComunityPageThreadFragment => !!_),
    [communityQ]
  );

  const reply: CommunityPageThreadsCtx['reply'] = useCallback(
    ({ commentId, threadId, replyMessage }) => {
      if (createReplyMutStatus.loading) {
        return;
      }
      return createReplyMut({
        variables: {
          threadId: threadId,
          inReplyToId: commentId,
          comment: { content: replyMessage }
        }
      });
    },
    [createReplyMutStatus.loading]
  );

  const toggleLike: CommunityPageThreadsCtx['toggleLike'] = useCallback(
    comment => {
      if (likeMutStatus.loading || unlikeMutStatus.loading) {
        return;
      }
      if (comment.myLike) {
        return unlikeMut({
          variables: { contextId: comment.myLike.id }
        });
      } else {
        return likeMut({
          variables: {
            contextId: comment.id
          }
        });
      }
    },
    [likeMutStatus.loading, unlikeMutStatus.loading]
  );
  const ctx = useMemo<CommunityPageThreadsCtx>(
    () => ({
      reply,
      threads,
      toggleLike
    }),
    [reply, threads, toggleLike]
  );

  return (
    <CommunityPageThreadsCtx.Provider value={ctx}>
      {children}
    </CommunityPageThreadsCtx.Provider>
  );
};

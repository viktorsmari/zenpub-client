import { Thread } from 'graphql/types.generated';
import { useMemo } from 'react';
import { useThreadPreviewQuery } from './useThreadPreview.generated';

export const useThreadPreview = (threadId: Thread['id']) => {
  const threadPreviewQ = useThreadPreviewQuery({ variables: { threadId } });
  const thread = threadPreviewQ.data?.thread;
  return useMemo(() => {
    const mainComment = thread?.comments?.edges[0];
    const commentCount = thread?.comments?.totalCount;
    const context = thread?.context;
    return {
      mainComment,
      context,
      totalReplies: commentCount && commentCount - 1,
      totalComments: thread?.comments ? thread.comments.totalCount - 1 : 0
    };
  }, [thread]);
};

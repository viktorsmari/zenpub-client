import { Thread } from 'graphql/types.generated';
import { useThreadPreviewQuery } from './useThreadPreview.generated';
import { useMemo } from 'react';
import { manageEdges } from 'fe/lib/helpers/edges';

export const useThreadPreview = (threadId: Thread['id']) => {
  const threadPreviewQ = useThreadPreviewQuery({ variables: { threadId } });
  const thread = threadPreviewQ.data?.thread;
  return useMemo(() => {
    let mainComment = thread?.comments?.edges[0]?.node;
    const commentCount = thread?.comments?.totalCount;
    const context = thread?.context;
    const comments = manageEdges(thread?.comments);
    comments.nodes = comments.nodes.slice(1);
    if (comments.withEdges) {
      comments.withEdges.edges = comments.withEdges.edges.slice(1);
    }
    return {
      mainComment,
      context,
      totalReplies: commentCount && commentCount - 1,
      comments
    };
  }, [thread]);
};

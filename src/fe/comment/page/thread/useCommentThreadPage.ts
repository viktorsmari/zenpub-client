import { Thread } from 'graphql/types.generated';
import { useMemo } from 'react';
import { useThreadPageQuery } from './useCommentThreadPage.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useCommentThreadPage = (threadId: Thread['id']) => {
  const threadPreviewQ = useThreadPageQuery({
    variables: { threadId, limit: DEFAULT_PAGE_SIZE }
  });
  const commentPage = usePage(
    threadPreviewQ.data?.thread?.comments,
    ({ cursor, update }) => {
      threadPreviewQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, threadId },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.thread?.comments && prev.thread?.comments
            ? update({
                prev: prev.thread.comments,
                fetched: fetchMoreResult.thread.comments
              })
            : prev;
        }
      });
    }
  );

  return useMemo(() => {
    return {
      commentPage
    };
  }, [commentPage]);
};

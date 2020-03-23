import { Thread } from 'graphql/types.generated';
import { useMemo } from 'react';
import { useThreadPageQuery } from './useCommentThreadPage.generated';
import { usePage } from 'fe/lib/helpers/usePage';

export const useCommentThreadPage = (threadId: Thread['id']) => {
  const threadPreviewQ = useThreadPageQuery({ variables: { threadId } });
  const commentPage = usePage(threadPreviewQ.data?.thread?.comments);
  return useMemo(() => {
    return {
      commentPage
    };
  }, [commentPage]);
};

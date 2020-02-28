import { Thread } from 'graphql/types.generated';
import { useThreadPreviewQuery } from './useThreadPreview.generated';
import { useMemo } from 'react';

export const useThreadPreview = (threadId: Thread['id']) => {
  const threadPreviewQ = useThreadPreviewQuery({ variables: { threadId } });
  return useMemo(() => {
    return {
      thread: threadPreviewQ.data?.thread
    };
  }, [threadPreviewQ]);
};

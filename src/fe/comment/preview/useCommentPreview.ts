import { Comment } from 'graphql/types.generated';
import { useCommentPreviewQuery } from './useCommentPreview.generated';
import { useMemo } from 'react';

export const useCommentPreview = (commentId: Comment['id']) => {
  const commentPreviewQ = useCommentPreviewQuery({ variables: { commentId } });
  return useMemo(() => {
    return {
      comment: commentPreviewQ.data?.comment
    };
  }, [commentPreviewQ]);
};

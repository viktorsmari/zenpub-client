import { Comment } from 'graphql/types.generated';
import { useCommentPreviewQuery } from './useCommentPreview.generated';
import { useMemo } from 'react';
import { useLikeContext } from 'fe/context/like/useLikeContext';
import { useReplyComment } from '../reply/useReplyComment';

export const useCommentPreview = (commentId: Comment['id']) => {
  const commentPreviewQ = useCommentPreviewQuery({ variables: { commentId } });
  const { toggleLike } = useLikeContext(
    commentPreviewQ.data?.comment?.id,
    commentPreviewQ.data?.comment?.myLike,
    commentPreviewQ.data?.comment?.likerCount,
    'Comment'
  );
  const { reply } = useReplyComment(commentPreviewQ.data?.comment);
  return useMemo(() => {
    return {
      comment: commentPreviewQ.data?.comment,
      toggleLike,
      reply
    };
  }, [commentPreviewQ, toggleLike, reply]);
};

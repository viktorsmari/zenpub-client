import { useCommentPreview } from 'fe/comment/preview/useCommentPreview';
import { Comment } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  Comment as CommentPreviewUI,
  CommentProps
} from 'ui/modules/Previews/Comment';
import { FlagModalHOC } from 'HOC/modules/FlagModal/flagModalHOC';
import { useFormik } from 'formik';

export interface CommentPreviewHOC {
  commentId: Comment['id'];
}

export const CommentPreviewHOC: FC<CommentPreviewHOC> = ({ commentId }) => {
  const { comment, toggleLike, reply } = useCommentPreview(commentId);
  const toggleLikeFormik = useFormik({
    initialValues: {},
    onSubmit: toggleLike
  });

  const replyFormik = useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: ({ replyMessage }) => reply(replyMessage)
  });

  const commentPreviewProps = useMemo<CommentProps | null>(() => {
    if (!comment) {
      return null;
    }
    const props: CommentProps = {
      content: comment.content,
      reply: {
        replyFormik
      },
      like: {
        iLikeIt: !!comment.myLike,
        totalLikes: comment.likerCount || 0,
        toggleLikeFormik
      },
      FlagModal: ({ done }) => (
        <FlagModalHOC
          done={done}
          contextId={comment.id}
          flagged={false /* !!comment.myFlag */}
        />
      )
    };
    return props;
  }, [comment, toggleLikeFormik]);

  return commentPreviewProps && <CommentPreviewUI {...commentPreviewProps} />;
};

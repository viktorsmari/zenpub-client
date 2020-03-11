import { useCommentPreview } from 'fe/comment/preview/useCommentPreview';
import { Comment } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  Comment as CommentPreviewUI,
  CommentProps
} from 'ui/modules/Previews/Comment';
import { FlagModalHOC } from 'HOC/modules/FlagModal/flagModalHOC';
import { useFormik } from 'formik';
import { MainComment } from 'ui/modules/Previews/MainComment';

export interface CommentPreviewHOC {
  commentId: Comment['id'];
  mainComment: boolean;
  showActions?: boolean;
}

export const CommentPreviewHOC: FC<CommentPreviewHOC> = ({
  commentId,
  mainComment,
  showActions
}) => {
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
      url: comment.thread ? `/thread/${comment.thread.id}` : '',
      content: comment.content,
      reply: {
        replyFormik
      },
      like: {
        iLikeIt: !!comment.myLike,
        totalLikes: comment.likerCount || 0,
        toggleLikeFormik
      },
      flagId: '' /* !!comment.myFlag */,
      FlagModal: ({ done }) => (
        <FlagModalHOC
          done={done}
          contextId={comment.id}
          flagId={'' /* !!comment.myFlag */}
          // flagged={false /* !!comment.myFlag */}
        />
      ),
      showActions: showActions || false
    };
    return props;
  }, [comment, toggleLikeFormik]);

  return (
    commentPreviewProps &&
    (mainComment ? (
      <MainComment {...commentPreviewProps} />
    ) : (
      <CommentPreviewUI {...commentPreviewProps} />
    ))
  );
};

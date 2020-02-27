import { useReplyComment } from 'fe/comment/reply/useReplyComment';
import { useLikeContext } from 'fe/context/like/useLikeContext';
import { useFormik } from 'formik';
import { getActivityActions } from 'HOC/modules/ActivityPreview/lib/getActivityActions';
import { getActivityActor } from 'HOC/modules/ActivityPreview/lib/getActivityActor';
import React, { FC } from 'react';
import {
  ActivityPreview,
  Props as ActivityPreviewProps,
  Status as ActivityPreviewStatus
} from 'ui/modules/ActivityPreview';
import * as UIAP from 'ui/modules/ActivityPreview/preview';
import * as GQL from './CommunityPage.generated';

export const ThreadActivityMock: FC<{
  thread: GQL.CommunityPageThreadFragment;
}> = ({ thread }) => {
  const comment =
    thread.comments?.edges &&
    thread.comments.edges[0] &&
    thread.comments.edges[0].node;

  const { reply } = useReplyComment(comment);
  const replyThreadFormik = useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: ({ replyMessage }) => {
      if (!comment) {
        return;
      }
      return reply(replyMessage);
    }
  });

  const { toggleLike } = useLikeContext(
    comment?.id,
    comment?.myLike,
    comment?.likerCount,
    'Comment'
  );
  const toggleLikeFormik = useFormik<{}>({
    initialValues: {},
    onSubmit: () => {
      if (!comment) {
        return;
      }
      return toggleLike();
    }
  });

  if (!comment || !comment.creator) {
    return null;
  }

  const props: ActivityPreviewProps = {
    actor: getActivityActor(comment.creator),
    context: {
      type: UIAP.ContextType.Comment,
      content: comment.content,
      link: `/thread/${thread.id}`,
      verb: UIAP.ContextVerb.Created
    },
    createdAt: comment.createdAt,
    status: ActivityPreviewStatus.Loaded,
    actions: getActivityActions(comment, replyThreadFormik, toggleLikeFormik),
    inReplyToCtx: null
  };

  return <ActivityPreview {...props} />;
};

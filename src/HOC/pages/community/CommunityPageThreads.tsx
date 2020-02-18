import { useFormik } from 'formik';
import { getActivityActions } from 'HOC/modules/ActivityPreview/lib/getActivityActions';
import { getActivityActor } from 'HOC/modules/ActivityPreview/lib/getActivityActor';
import React, { createContext, FC, useContext } from 'react';
import {
  ActivityPreview,
  Props as ActivityPreviewProps,
  Status as ActivityPreviewStatus
} from 'ui/modules/ActivityPreview';
import * as UIP from 'ui/modules/ActivityPreview/preview';
import { alertUnimplementedCtx } from 'util/ctx-mock/alertUnimplementedCtx';
import * as GQL from './CommunityPageThreads.generated';
import { Thread, Comment, Like } from 'graphql/types.generated';

export interface Props {}

export interface CommunityPageThreadsCtx {
  threads: GQL.ComunityPageThreadFragment[];
  reply(_: {
    commentId: Comment['id'];
    threadId: Thread['id'];
    replyMessage: string;
  }): Promise<unknown> | void;
  toggleLike(_: {
    id: Comment['id'];
    myLike: { id: Like['id'] } | null;
  }): Promise<unknown> | void;
}
export const CommunityPageThreadsCtx = createContext(
  alertUnimplementedCtx<CommunityPageThreadsCtx>('CommunityPageThreadsCtx')
);

export const CommunityPageThreads: FC<Props> = () => {
  const { threads } = useContext(CommunityPageThreadsCtx);

  return (
    <>
      {threads.map(thread => (
        <ThreadActivity thread={thread} key={thread.id} />
      ))}
    </>
  );
};

export const ThreadActivity: FC<{ thread: GQL.ComunityPageThreadFragment }> = ({
  thread
}) => {
  const { reply, toggleLike } = useContext(CommunityPageThreadsCtx);

  const comment =
    thread.comments?.edges &&
    thread.comments.edges[0] &&
    thread.comments.edges[0].node;

  const replyThreadFormik = useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: vals => {
      if (!comment) {
        return;
      }
      return reply({ ...vals, commentId: comment.id, threadId: thread.id });
    }
  });
  const toggleLikeFormik = useFormik<{}>({
    initialValues: {},
    onSubmit: () => {
      if (!comment) {
        return;
      }
      return toggleLike(comment);
    }
  });

  if (!comment || !comment.creator) {
    return null;
  }

  const props: ActivityPreviewProps = {
    actor: getActivityActor(comment.creator),
    context: {
      type: UIP.ContextType.Comment,
      content: comment.content,
      link: `/thread/${thread.id}`,
      verb: UIP.ContextVerb.Created
    },
    createdAt: comment.createdAt,
    status: ActivityPreviewStatus.Loaded,
    actions: getActivityActions(comment, replyThreadFormik, toggleLikeFormik),
    inReplyToCtx: null
  };

  return <ActivityPreview {...props} />;
};

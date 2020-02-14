import { PureQueryOptions } from 'apollo-client';
import { useFormik } from 'formik';
import { Community } from 'graphql/types.generated';
import { getActivityActions } from 'HOC/modules/ActivityPreview/lib/getActivityActions';
import { getActivityActor } from 'HOC/modules/ActivityPreview/lib/getActivityActor';
import React, { createContext, SFC, useContext, useEffect } from 'react';
import {
  ActivityPreview,
  Props as ActivityPreviewProps,
  Status as ActivityPreviewStatus
} from 'ui/modules/ActivityPreview';
import * as UIP from 'ui/modules/ActivityPreview/preview';
import * as GQL from './CommunityPageThreads.generated';

export interface Props {
  communityId: Community['id'];
}

export interface CommunityPageThreadsCtx {
  useCommunityPageThreadsQuery: typeof GQL.useCommunityPageThreadsQuery;
  useCommunityPageThreadLikeMutation: typeof GQL.useCommunityPageThreadLikeMutation;
  useCommunityPageThreadUnlikeMutation: typeof GQL.useCommunityPageThreadUnlikeMutation;
  useCommunityPageThreadCreateReplyMutation: typeof GQL.useCommunityPageThreadCreateReplyMutation;
}
export const CommunityPageThreadsCtx = createContext<CommunityPageThreadsCtx>({
  useCommunityPageThreadsQuery: GQL.useCommunityPageThreadsQuery,
  useCommunityPageThreadLikeMutation: GQL.useCommunityPageThreadLikeMutation,
  useCommunityPageThreadUnlikeMutation:
    GQL.useCommunityPageThreadUnlikeMutation,
  useCommunityPageThreadCreateReplyMutation:
    GQL.useCommunityPageThreadCreateReplyMutation
});

export const CommunityPageThreads: SFC<Props> = ({ communityId }) => {
  const { useCommunityPageThreadsQuery } = useContext(CommunityPageThreadsCtx);

  const communityQ = useCommunityPageThreadsQuery({
    variables: { communityId }
  });
  useEffect(() => {
    communityQ.refetch();
  }, []);
  if (
    communityQ.error ||
    communityQ.loading ||
    !communityQ.data ||
    !communityQ.data.community ||
    !communityQ.data.community.threads ||
    !communityQ.data.community.threads.edges
  ) {
    return null;
  }
  return (
    <>
      {communityQ.data.community.threads.edges.map(edge => {
        if (!edge || !edge.node) {
          return null;
        }
        const thread = edge.node;

        return <ThreadActivity thread={thread} key={thread.id} />;
      })}
    </>
  );
};
export const ThreadActivity: SFC<{
  thread: GQL.ComunityPageThreadFragment;
  refetchQueries?: Array<string | PureQueryOptions>;
}> = ({ thread, refetchQueries }) => {
  if (
    !thread.comments ||
    !thread.comments.edges.length ||
    !thread.comments.edges[0] ||
    !thread.comments.edges[0].node
  ) {
    return null;
  }
  const {
    useCommunityPageThreadCreateReplyMutation,
    useCommunityPageThreadLikeMutation,
    useCommunityPageThreadUnlikeMutation
  } = useContext(CommunityPageThreadsCtx);

  const comment = thread.comments.edges[0].node;
  if (!comment.creator) {
    return null;
  }

  const [likeMut, likeMutStatus] = useCommunityPageThreadLikeMutation();
  const [unlikeMut, unlikeMutStatus] = useCommunityPageThreadUnlikeMutation();
  const [
    createReplyMut,
    createReplyMutStatus
  ] = useCommunityPageThreadCreateReplyMutation();

  const replyThreadFormik = useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: ({ replyMessage }) => {
      if (createReplyMutStatus.loading) {
        return;
      }
      return createReplyMut({
        variables: {
          threadId: thread.id,
          inReplyToId: comment.id,
          comment: { content: replyMessage }
        },
        refetchQueries
      });
    }
  });
  const toggleLikeFormik = useFormik<{}>({
    initialValues: {},
    onSubmit: () => {
      if (likeMutStatus.loading || unlikeMutStatus.loading) {
        return;
      }
      const { myLike } = comment;
      if (myLike) {
        return unlikeMut({
          variables: { contextId: myLike.id },
          refetchQueries
        });
      } else {
        return likeMut({
          variables: {
            contextId: comment.id
          },
          refetchQueries
        });
      }
    }
  });

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

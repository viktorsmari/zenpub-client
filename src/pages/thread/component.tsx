import { getActivityActor } from 'fe/lib/activity/getActivityActor';
import { getCommunityInfoStrings } from 'fe/lib/activity/getContextCommunityInfo';
import { CommentPreviewHOC } from 'HOC/modules/previews/comment/CommentPreview';
import { CommentPreviewFragment } from 'HOC/modules/previews/comment/CommentPreview.generated';
import React, { FC, useEffect, useMemo } from 'react';
import {
  BigThreadCommentPreview,
  BigThreadCommentPreviewPropsLoaded,
  Status as ActivityPreviewStatus
} from 'ui/modules/ActivityPreview';
import { CreateReplyMutationMutationOperation } from '../../graphql/createReply.generated';
import { DeleteMutationMutationOperation } from '../../graphql/delete.generated';
import { useGetThreadQuery } from '../../graphql/getThread.generated';
import { LikeMutationMutationOperation } from '../../graphql/like.generated';
import { useDynamicLinkOpResult } from '../../util/apollo/dynamicLink';
import Stateless from './stateless';
export interface Props {
  threadId: string;
}
export const Thread: React.FC<Props> = ({ threadId }) => {
  const threadQuery = useGetThreadQuery({ variables: { threadId } });
  useEffect(() => {
    threadQuery.refetch();
  }, []);
  useDynamicLinkOpResult<CreateReplyMutationMutationOperation>(
    'createReplyMutation',
    () => {
      threadQuery.refetch();
    },
    [threadQuery.refetch]
  );
  useDynamicLinkOpResult<LikeMutationMutationOperation>(
    'likeMutation',
    () => {
      threadQuery.refetch();
    },
    [threadQuery.refetch]
  );
  useDynamicLinkOpResult<DeleteMutationMutationOperation>(
    'deleteMutation',
    () => {
      threadQuery.refetch();
    },
    [threadQuery.refetch]
  );
  const ThreadBoxes = useMemo<JSX.Element[]>(() => {
    if (
      !(
        threadQuery.data &&
        threadQuery.data.thread &&
        threadQuery.data.thread.comments
      )
    ) {
      return [];
    }
    const comments = threadQuery.data.thread.comments;
    return comments.edges
      .map(
        (edge, index) =>
          edge &&
          edge.node && (
            <CommentActivity
              root={index === 0}
              comment={edge.node}
              key={edge.node.id}
            />
          )
      )
      .filter((_): _ is JSX.Element => !!_);
  }, [threadQuery]);

  return <Stateless threadQuery={threadQuery} ThreadBoxes={ThreadBoxes} />;
};

export default Thread;

export const CommentActivity: FC<{
  root: boolean;
  comment: CommentPreviewFragment;
}> = ({ comment, root }) => {
  if (!comment.creator) {
    console.error(`No creator for comment!`);
    console.log(comment);
    return null;
  }

  // const actions: ActionProps | null = isContextFollowed(comment)
  //   ? {
  //       FlagModal: null /*  ({ done }) => <FlagModalHOC {... {
  //       done,
  //       contextId: comment.id,
  //       flagged: !!comment.myFlag
  //     }} />, */,
  //       like: {
  //         iLikeIt: !!comment.myLike,
  //         toggleLikeFormik: useActivityToggleLikeFormik(comment),
  //         totalLikes: comment.likerCount || 0
  //       },
  //       reply: {
  //         replyFormik: useActivityReplyFormik(comment)
  //       }
  //     }
  //   : null;
  const communityInfoStrings = getCommunityInfoStrings(comment);

  const props: BigThreadCommentPreviewPropsLoaded = {
    actor: getActivityActor(comment.creator),
    content: comment.content,
    status: ActivityPreviewStatus.Loaded,
    createdAt: comment.createdAt,
    ...communityInfoStrings
  };
  return !root ? (
    <CommentPreviewHOC commentId={comment.id} />
  ) : (
    <BigThreadCommentPreview {...props} />
  );
};

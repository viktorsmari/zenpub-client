import React from 'react';
import Stateless from './stateless';
import {
  useGetThreadQuery,
  useLikeCommentMutationMutation,
  useUndoLikeCommentMutationMutation,
  useCreateReplyMutationMutation
} from '../../generated/graphqlapollo';
import { CommentCtx } from '../../_context/commentCtx';
export interface Props {
  id: number;
}
export const Thread: React.FC<Props> = ({ id }) => {
  const [
    createReplyMutation /* , CreateReplyResult */
  ] = useCreateReplyMutationMutation({});
  const [
    likeCommentMutation /* , likeCommentResult */
  ] = useLikeCommentMutationMutation({});
  const [
    undoLikeCommentMutation /* , undoLikeCommentResult */
  ] = useUndoLikeCommentMutationMutation({});
  const threadQuery = useGetThreadQuery({ variables: { id } });
  const commentCtx: CommentCtx = {
    likeComment: variables =>
      likeCommentMutation({ variables }).then(() => threadQuery.refetch()),
    unlikeComment: variables =>
      undoLikeCommentMutation({ variables }).then(() => threadQuery.refetch()),
    replyComment: variables =>
      createReplyMutation({ variables }).then(() => threadQuery.refetch())
  };

  return (
    <CommentCtx.Provider value={commentCtx}>
      <Stateless threadQuery={threadQuery} />
    </CommentCtx.Provider>
  );
};

export default Thread;

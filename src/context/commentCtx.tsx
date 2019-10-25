import {
  CreateReplyMutationMutationVariables,
  LikeCommentMutationMutationVariables,
  UndoLikeCommentMutationMutationVariables
} from '../generated/graphqlapollo';
import { createContext } from 'react';

export interface CommentCtx {
  likeComment(_: LikeCommentMutationMutationVariables): unknown;
  unlikeComment(_: UndoLikeCommentMutationMutationVariables): unknown;
  replyComment(_: CreateReplyMutationMutationVariables): unknown;
}

export const CommentCtx = createContext<CommentCtx>({} as CommentCtx);

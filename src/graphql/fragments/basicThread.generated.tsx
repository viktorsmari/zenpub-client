import * as Types from '../types.generated';

import { BasicCommentWithInReplyToFragment } from './basicComment.generated';
import gql from 'graphql-tag';
import { BasicCommentWithInReplyToFragmentDoc } from './basicComment.generated';


export type BasicThreadFragment = (
  { __typename: 'Thread' }
  & Pick<Types.Thread, 'id' | 'isLocal' | 'createdAt' | 'updatedAt' | 'lastActivity'>
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )>, comments: Types.Maybe<(
    { __typename: 'CommentsPage' }
    & Pick<Types.CommentsPage, 'totalCount'>
    & { pageInfo: Types.Maybe<(
      { __typename: 'PageInfo' }
      & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
    )>, edges: Array<Types.Maybe<(
      { __typename: 'Comment' }
      & BasicCommentWithInReplyToFragment
    )>> }
  )> }
);

export const BasicThreadFragmentDoc = gql`
    fragment BasicThread on Thread {
  id
  isLocal
  createdAt
  updatedAt
  lastActivity
  myFollow {
    id
  }
  comments {
    totalCount
    pageInfo {
      startCursor
      endCursor
    }
    edges {
      ...BasicCommentWithInReplyTo
    }
  }
}
    ${BasicCommentWithInReplyToFragmentDoc}`;

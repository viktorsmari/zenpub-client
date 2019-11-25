import * as Types from '../../types.generated.d';

import { BasicCommentWithInReplyToFragment } from './basicComment.generated';
import gql from 'graphql-tag';
import { BasicCommentWithInReplyToFragmentDoc } from './basicComment.generated';


export type BasicThreadFragment = { __typename?: 'Thread', id: string, isLocal: boolean, createdAt: string, updatedAt: string, lastActivity: string, myFollow: Types.Maybe<{ __typename?: 'Follow', id: string }>, comments: { __typename?: 'CommentsEdges', totalCount: number, pageInfo: Types.Maybe<{ __typename?: 'PageInfo', startCursor: string, endCursor: string }>, edges: Array<Types.Maybe<{ __typename?: 'CommentsEdge', cursor: string, node: (
        { __typename?: 'Comment' }
        & BasicCommentWithInReplyToFragment
      ) }>> } };

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
      cursor
      node {
        ...BasicCommentWithInReplyTo
      }
    }
  }
}
    ${BasicCommentWithInReplyToFragmentDoc}`;
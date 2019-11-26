import * as Types from '../../types.generated.d';

import { BasicResourceFragment } from './basicResource.generated';
import { BasicCollectionFragment } from './basicCollection.generated';
import { BasicCommunityFragment } from './basicCommunity.generated';
import { BasicUserFragment } from './basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './basicUser.generated';
import { BasicCommunityFragmentDoc } from './basicCommunity.generated';
import { BasicCollectionFragmentDoc } from './basicCollection.generated';
import { BasicResourceFragmentDoc } from './basicResource.generated';





export type BasicCommentWithInReplyToFragment = (
  { __typename?: 'Comment', inReplyTo: Types.Maybe<(
    { __typename?: 'Comment' }
    & BasicCommentFragment
  )> }
  & BasicCommentFragment
);

export type BasicCommentFragment = { __typename?: 'Comment', id: string, content: string, isLocal: boolean, isPublic: boolean, isHidden: boolean, createdAt: string, updatedAt: string, myLike: Types.Maybe<{ __typename?: 'Like', id: string }>, creator: (
    { __typename?: 'User' }
    & BasicUserFragment
  ), likes: { __typename?: 'LikesEdges', totalCount: number }, thread: { __typename?: 'Thread', id: string, context: (
      { __typename?: 'Collection' }
      & BasicCollectionFragment
    ) | (
      { __typename?: 'Community' }
      & BasicCommunityFragment
    ) | { __typename?: 'Flag' } | (
      { __typename?: 'Resource' }
      & BasicResourceFragment
    ) } };

export const BasicCommentFragmentDoc = gql`
    fragment BasicComment on Comment {
  id
  content
  isLocal
  isPublic
  isHidden
  createdAt
  updatedAt
  myLike {
    id
  }
  creator {
    ...BasicUser
  }
  likes {
    totalCount
  }
  thread {
    id
    context {
      __typename
      ... on Community {
        ...BasicCommunity
      }
      ... on Collection {
        ...BasicCollection
      }
      ... on Resource {
        ...BasicResource
      }
    }
  }
}
    ${BasicUserFragmentDoc}
${BasicCommunityFragmentDoc}
${BasicCollectionFragmentDoc}
${BasicResourceFragmentDoc}`;
export const BasicCommentWithInReplyToFragmentDoc = gql`
    fragment BasicCommentWithInReplyTo on Comment {
  ...BasicComment
  inReplyTo {
    ...BasicComment
  }
}
    ${BasicCommentFragmentDoc}`;
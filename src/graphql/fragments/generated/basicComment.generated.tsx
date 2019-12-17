import * as Types from '../../types.generated';

import { BasicCollectionFragment } from './basicCollection.generated';
import { BasicCommunityFragment } from './basicCommunity.generated';
import { BasicResourceFragment } from './basicResource.generated';
import { BasicUserFragment } from './basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './basicUser.generated';
import { BasicResourceFragmentDoc } from './basicResource.generated';
import { BasicCommunityFragmentDoc } from './basicCommunity.generated';
import { BasicCollectionFragmentDoc } from './basicCollection.generated';





export type BasicCommentWithInReplyToFragment = (
  { __typename?: 'Comment' }
  & { inReplyTo: Types.Maybe<(
    { __typename?: 'Comment' }
    & BasicCommentFragment
  )> }
  & BasicCommentFragment
);

export type BasicCommentFragment = (
  { __typename?: 'Comment' }
  & Pick<Types.Comment, 'id' | 'content' | 'isLocal' | 'isPublic' | 'isHidden' | 'createdAt' | 'updatedAt'>
  & { myLike: Types.Maybe<(
    { __typename?: 'Like' }
    & Pick<Types.Like, 'id'>
  )>, creator: (
    { __typename?: 'User' }
    & BasicUserFragment
  ), likes: (
    { __typename?: 'LikesEdges' }
    & Pick<Types.LikesEdges, 'totalCount'>
  ), thread: (
    { __typename?: 'Thread' }
    & Pick<Types.Thread, 'id'>
    & { context: (
      { __typename?: 'Collection' }
      & BasicCollectionFragment
    ) | (
      { __typename?: 'Community' }
      & BasicCommunityFragment
    ) | { __typename?: 'Flag' } | (
      { __typename?: 'Resource' }
      & BasicResourceFragment
    ) }
  ) }
);

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
      ... on Resource {
        ...BasicResource
      }
      ... on Community {
        ...BasicCommunity
      }
      ... on Collection {
        ...BasicCollection
      }
    }
  }
}
    ${BasicUserFragmentDoc}
${BasicResourceFragmentDoc}
${BasicCommunityFragmentDoc}
${BasicCollectionFragmentDoc}`;
export const BasicCommentWithInReplyToFragmentDoc = gql`
    fragment BasicCommentWithInReplyTo on Comment {
  ...BasicComment
  inReplyTo {
    ...BasicComment
  }
}
    ${BasicCommentFragmentDoc}`;
